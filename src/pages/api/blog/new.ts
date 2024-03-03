import { NextApiHandler } from "next";

import { Post } from "@models/post";
import { Response } from "@models/response";

import { methodNotAllowed, unauthorized } from "@utils/errors";
import prisma from "@utils/prisma";
import { withIronSession } from "@utils/session";

const handle: NextApiHandler<Response> = async (req, res) => {
	if (req.method?.toUpperCase() != "POST") {
		res.status(405).json(methodNotAllowed);
		return;
	}

	const postData = Post.safeParse(req.body);

	if (!postData.success) {
		res.status(403).json({ ok: false, error: postData.error });
		return;
	}

	const user = req.session.user;

	if (user === undefined) {
		res.status(401).json(unauthorized);
		return;
	}

	const { publish, ...data } = postData.data;

	await prisma.user
		.update({
			where: { id: user.id },
			data: {
				posts: {
					create: {
						...data,
						published: publish,
						tags: data.tags.split(" ")
					}
				}
			}
		})
		.then(() => res.json({ ok: true, data: "Successfully created new post" }))
		.catch((error) => res.status(500).json({ ok: false, error }));
};

export default withIronSession(handle);
