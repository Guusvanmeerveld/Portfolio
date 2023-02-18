import { NextApiHandler } from "next";

import { Response } from "@models/response";

import { registrationIsEnabled } from "@utils/config";
import { methodNotAllowed } from "@utils/errors";

const handler: NextApiHandler<Response> = (req, res) => {
	if (req.method?.toUpperCase() !== "GET") {
		res.status(405).json(methodNotAllowed);
		return;
	}

	res.json({ ok: true, data: { registrationIsEnabled } });
};

export default handler;
