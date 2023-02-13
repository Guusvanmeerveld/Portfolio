import { NextApiHandler } from "next";

import { methodNotAllowed, unauthorized } from "@utils/errors";
import { withIronSession } from "@utils/session";
import { Post } from "@models/post";

import prisma from "@utils/prisma";

const handle: NextApiHandler = async (req, res) => {
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

	const data = postData.data;

	await prisma.user.update({
		where: { id: user.id },
		data: {
			posts: {
				create: {
					...data,
					published: data.published !== undefined,
					tags: data.tags.trim().split(" ")
				}
			}
		}
	});

	res.redirect("/blog");
};

export default withIronSession(handle);
