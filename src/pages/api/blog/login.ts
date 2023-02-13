import bcrypt from "bcrypt";
import { NextApiHandler } from "next";

import { LoginCredentials } from "@models/login";

import { withIronSession } from "@utils/session";
import { methodNotAllowed, unauthorized } from "@utils/errors";
import prisma from "@utils/prisma";

const handle: NextApiHandler = async (req, res) => {
	if (req.method?.toUpperCase() != "POST") {
		res.status(405).json(methodNotAllowed);
		return;
	}

	const loginCredentials = LoginCredentials.safeParse(req.body);

	if (!loginCredentials.success) {
		res.status(403).json({ ok: false, error: loginCredentials.error });
		return;
	}

	const email = loginCredentials.data.username;

	const user = await prisma.user.findUnique({ where: { email } });

	if (user === null) {
		res.status(401).json(unauthorized);
		return;
	}

	const password = loginCredentials.data.password;

	const isCorrect = await new Promise((resolve, reject) =>
		bcrypt.compare(password, user.password, (err, result) => {
			if (err) reject(err);
			else if (result !== undefined) resolve(result);
		})
	);

	if (!isCorrect) {
		res.status(401).json(unauthorized);
	}

	req.session.user = user;

	await req.session.save();

	res.redirect("/blog");
};

export default withIronSession(handle);
