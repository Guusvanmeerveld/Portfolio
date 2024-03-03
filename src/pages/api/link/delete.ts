import { NextApiHandler } from "next";
import z from "zod";

import { LinkIdFromString } from "@models/link";
import { Response } from "@models/response";

import { methodNotAllowed, unauthorized } from "@utils/errors";
import prisma from "@utils/prisma";
import { withIronSession } from "@utils/session";

const handler: NextApiHandler<Response> = async (req, res) => {
	if (req.method?.toUpperCase() !== "DELETE") {
		res.status(405).json(methodNotAllowed);
		return;
	}

	const user = req.session.user;

	if (user === undefined) {
		res.status(401).json(unauthorized);
		return;
	}

	const parsePostDataResult = z
		.object({
			id: LinkIdFromString
		})
		.safeParse(req.query);

	if (!parsePostDataResult.success) {
		res
			.status(400)
			.json({ ok: false, error: parsePostDataResult.error.message });
		return;
	}

	const link = await prisma.link.findUnique({
		where: { id: parsePostDataResult.data.id },
		include: { author: true }
	});

	if (link === null) {
		res.status(400).json({ ok: false, error: "Link does not exist" });
		return;
	}

	if (link.authorId !== user.id) {
		res.status(401).json(unauthorized);
		return;
	}

	await prisma.link
		.delete({ where: { id: link.id } })
		.then(() => res.json({ ok: true, data: "Successfully deleted link" }))
		.catch((error) => res.status(500).json({ ok: false, error }));
};

export default withIronSession(handler);
