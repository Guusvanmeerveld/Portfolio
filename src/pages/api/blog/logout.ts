import { NextApiHandler } from "next";

import { withIronSession } from "@utils/session";
import { methodNotAllowed, unauthorized } from "@utils/errors";

const handle: NextApiHandler = (req, res) => {
	if (req.method?.toUpperCase() != "GET") {
		res.status(405).json(methodNotAllowed);
		return;
	}

	const user = req.session.user;

	if (user === undefined) {
		res.status(401).json(unauthorized);
		return;
	}

	req.session.destroy();

	req.session.user = undefined;

	res.redirect("/blog");
};

export default withIronSession(handle);
