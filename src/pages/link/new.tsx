import { GetServerSideProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

import { FormEvent, useCallback, useState } from "react";

import axios from "axios";

import { User } from "@prisma/client";

import Link from "@models/link";

import { parseAxiosError, parseAxiosResponse } from "@utils/fetch";
import { withSessionSsr } from "@utils/session";

import EmptyPage from "@components/EmptyPage";
import Layout from "@components/Layout";

const NewLinkPage: NextPage<{ user: User }> = ({ user }) => {
	const [remoteAddress, setRemoteAddress] = useState("");
	const [localAddress, setLocalAddress] = useState("");
	const [error, setError] = useState<string | null>(null);

	const router = useRouter();

	const host =
		typeof window !== "undefined" && "location" in window
			? location.host
			: "guusvanmeerveld.dev";

	const createLink = useCallback(
		async (e: FormEvent) => {
			e.preventDefault();

			const parsedLinkResult = Link.safeParse({
				remoteAddress,
				location: localAddress
			});

			if (!parsedLinkResult.success) {
				setError(parsedLinkResult.error.message);
				return;
			}

			const response = await axios
				.post("/api/link/new", parsedLinkResult.data)
				.then(parseAxiosResponse)
				.catch(parseAxiosError);

			if (!response.ok) {
				setError(JSON.stringify(response.error));
				return;
			}

			router.push("/link");
		},
		[remoteAddress, localAddress, router]
	);

	return (
		<Layout>
			<NextSeo title="New link" />
			<EmptyPage>
				<div className="columns">
					<div className="col col-6 col-mx-auto">
						<h2>Create a new link</h2>
						<form onSubmit={createLink}>
							<label className="form-label" htmlFor="remote-address">
								Remote address
							</label>
							<input
								required
								className="form-input"
								onChange={(e) => setRemoteAddress(e.target.value)}
								name="remoteAddress"
								type="text"
								id="remote-address"
								placeholder="https://example.com"
							/>
							<label className="form-label" htmlFor="local-address">
								Address on the server
							</label>
							<div className="input-group">
								<span className="input-group-addon">{host}/link/</span>
								<input
									required
									className="form-input"
									onChange={(e) => setLocalAddress(e.target.value)}
									name="local-address"
									type="text"
									id="local-address"
									placeholder="example"
								/>
							</div>

							{error !== null && (
								<div className="toast toast-error mt-2">
									<button
										className="btn btn-clear float-right"
										onClick={() => setError(null)}
									/>
									{error}
								</div>
							)}

							<input
								type="submit"
								className="btn btn-primary mt-2"
								value="Create new link"
							/>
						</form>
					</div>
				</div>
			</EmptyPage>
		</Layout>
	);
};

export const getServerSideProps: GetServerSideProps = withSessionSsr(
	async ({ req }) => {
		const user = req.session.user;

		if (user === undefined)
			return {
				notFound: true
			};

		return { props: { user } };
	}
);

export default NewLinkPage;
