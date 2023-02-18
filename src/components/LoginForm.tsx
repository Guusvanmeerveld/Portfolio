import { useRouter } from "next/router";

import { FC, FormEvent, useCallback, useState } from "react";

import axios from "axios";

import { LoginCredentials } from "@models/login";
import { Response } from "@models/response";

import { parseUserInputError } from "@utils/errors";
import { parseAxiosError, parseAxiosResponse } from "@utils/fetch";

const LoginForm: FC = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [rememberMe, setRememberMe] = useState(false);

	const [error, setError] = useState<string | null>(null);

	const router = useRouter();

	const login = useCallback(
		async (e: FormEvent) => {
			e.preventDefault();

			const parseUserInputResult = LoginCredentials.safeParse({
				username,
				password,
				rememberMe
			});

			if (!parseUserInputResult.success) {
				setError(parseUserInputError(parseUserInputResult.error.message));
				return;
			}

			const response: Response = await axios
				.post("/api/login", parseUserInputResult.data)
				.then(parseAxiosResponse)
				.catch(parseAxiosError);

			if (response.ok) {
				router.push("/blog");
			} else {
				setError(JSON.stringify(response.error));
			}
		},
		[username, password, rememberMe, router]
	);

	return (
		<form onSubmit={login}>
			<div className="form-group">
				<label className="form-label" htmlFor="email">
					Email address
				</label>
				<input
					required
					className="form-input"
					onChange={(e) => setUsername(e.target.value)}
					name="username"
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
				<label className="form-checkbox">
					<input
						checked={rememberMe}
						onChange={() => setRememberMe((state) => !state)}
						name="rememberMe"
						type="checkbox"
					/>
					<i className="form-icon" /> Remember me
				</label>
				{error !== null && (
					<div className="toast toast-error mb-2">
						<button
							className="btn btn-clear float-right"
							onClick={() => setError(null)}
						/>
						{error}
					</div>
				)}
				<input className="btn btn-primary" type="submit" value="Login" />
			</div>
		</form>
	);
};

export default LoginForm;
