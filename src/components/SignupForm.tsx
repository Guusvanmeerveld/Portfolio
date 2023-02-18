import { useRouter } from "next/router";

import { FC, FormEvent, useCallback, useState } from "react";

import axios from "axios";

import { Response } from "@models/response";
import { SignupCredentials } from "@models/signup";

import { parseUserInputError } from "@utils/errors";
import { parseAxiosError, parseAxiosResponse } from "@utils/fetch";

const SignupForm: FC = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");

	const [error, setError] = useState<string | null>(null);

	const router = useRouter();

	const signup = useCallback(
		async (e: FormEvent): Promise<void> => {
			e.preventDefault();

			const parseUserInputResult = SignupCredentials.safeParse({
				email,
				password,
				name: username
			});

			if (!parseUserInputResult.success) {
				setError(parseUserInputError(parseUserInputResult.error.message));
				return;
			}

			const response: Response = await axios
				.post("/api/signup", parseUserInputResult.data)
				.then(parseAxiosResponse)
				.catch(parseAxiosError);

			if (response.ok) {
				router.push("/blog");
			} else {
				setError(JSON.stringify(response.error));
			}
		},
		[email, password, username, router]
	);

	return (
		<form onSubmit={signup}>
			<div className="form-group">
				<label className="form-label" htmlFor="email">
					Email address
				</label>
				<input
					required
					className="form-input"
					onChange={(e) => setEmail(e.target.value)}
					name="email"
					type="email"
					id="email"
					placeholder="mail@example.com"
				/>
				<label className="form-label" htmlFor="password">
					Password
				</label>
				<input
					required
					className="form-input"
					placeholder="Password"
					onChange={(e) => setPassword(e.target.value)}
					minLength={8}
					maxLength={128}
					name="password"
					type="password"
					id="password"
				/>

				<label className="form-label" htmlFor="password">
					Name
				</label>
				<input
					required
					className="form-input"
					placeholder="Full name"
					onChange={(e) => setUsername(e.target.value)}
					maxLength={32}
					name="name"
					type="text"
					id="name"
				/>

				{error !== null && (
					<div className="toast toast-error mt-2">
						<button
							className="btn btn-clear float-right"
							onClick={() => setError(null)}
						/>
						{error}
					</div>
				)}

				<input className="btn btn-primary mt-2" type="submit" value="Signup" />
			</div>
		</form>
	);
};

export default SignupForm;
