import { NextApiHandler } from "next";

import { Response } from "@models/response";

import { methodNotAllowed, unauthorized } from "@utils/errors";
import { withIronSession } from "@utils/session";

const handler: NextApiHandler<Response> = (req, res) => {
	if (req.method?.toUpperCase() !== "GET") {
		res.status(405).json(methodNotAllowed);
		return;
	}

	const user = req.session.user;

	if (user === undefined) {
		res.status(401).json(unauthorized);
		return;
	}

	res.json({ ok: true, data: user });
};

export default withIronSession(handler);
