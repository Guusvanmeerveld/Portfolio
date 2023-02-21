import { NextApiHandler } from "next";

import Link from "@models/link";
import { Response } from "@models/response";

import { methodNotAllowed, unauthorized } from "@utils/errors";
import prisma from "@utils/prisma";
import { withIronSession } from "@utils/session";

const handler: NextApiHandler<Response> = async (req, res) => {
	if (req.method?.toUpperCase() !== "POST") {
		res.status(405).json(methodNotAllowed);
		return;
	}

	const user = req.session.user;

	if (user === undefined) {
		res.status(401).json(unauthorized);
		return;
	}

	const parsedInputResult = Link.safeParse(req.body);

	if (!parsedInputResult.success) {
		res.status(400).json({ ok: false, error: parsedInputResult.error.message });
		return;
	}

	await prisma.user
		.update({
			where: { id: user.id },
			data: { links: { create: parsedInputResult.data } }
		})
		.then(() => res.json({ ok: true, data: "Successfully created link" }))
		.catch((error) => {
			console.log(error);

			return res.status(500).json({ ok: false, error });
		});
};

export default withIronSession(handler);
