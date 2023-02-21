import bcrypt from "bcrypt";
import { NextApiHandler } from "next";

import { Response } from "@models/response";
import { SignupCredentials } from "@models/signup";

import { registrationIsEnabled, saltRoundsForPassword } from "@utils/config";
import { methodNotAllowed } from "@utils/errors";
import prisma from "@utils/prisma";
import { withIronSession } from "@utils/session";

const handle: NextApiHandler<Response> = async (req, res) => {
	if (!registrationIsEnabled) {
		res
			.status(403)
			.json({ ok: false, error: "Registration is not enabled on this server" });
		return;
	}

	if (req.method?.toUpperCase() != "POST") {
		res.status(405).json(methodNotAllowed);
		return;
	}

	const signupCredentials = SignupCredentials.safeParse(req.body);

	if (!signupCredentials.success) {
		res.status(403).json({ ok: false, error: signupCredentials.error });
		return;
	}

	const password: string = await new Promise((resolve, reject) =>
		bcrypt.hash(
			signupCredentials.data.password,
			saltRoundsForPassword,
			(err, hash) => {
				if (err) return reject(err);
				else if (hash) return resolve(hash);
			}
		)
	);

	await prisma.user
		.create({
			data: {
				email: signupCredentials.data.email,
				name: signupCredentials.data.name,
				password,
				admin: process.env.ADMIN_EMAIL === signupCredentials.data.email
			}
		})
		.then(async (user) => {
			req.session.user = user;

			await req.session.save();

			res.json({ ok: true, data: "Signup successfull" });
		})
		.catch((error) => res.status(500).json({ ok: false, error }));
};

export default withIronSession(handle);
