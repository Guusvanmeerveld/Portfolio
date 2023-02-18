import z from "zod";

import axios from "axios";

import { useQuery } from "@tanstack/react-query";

import { NextPage } from "next";
import { NextSeo } from "next-seo";

import Layout from "@components/Layout";

import multipleClassNames from "@utils/multipleClassNames";
import { parseAxiosError, parseAxiosResponse } from "@utils/fetch";

import styles from "./login.module.scss";

import LoginForm from "@components/LoginForm";
import SignupForm from "@components/SignupForm";

const SettingsModel = z.object({ registrationIsEnabled: z.boolean() });

const Login: NextPage = () => {
	const { data, isLoading, error } = useQuery<
		z.infer<typeof SettingsModel>,
		string
	>(["settings"], async (): Promise<z.infer<typeof SettingsModel>> => {
		const response = await axios
			.get("/api/settings")
			.then(parseAxiosResponse)
			.catch(parseAxiosError);

		if (!response.ok) {
			throw JSON.stringify(response.error);
		}

		const parseSettingsResult = SettingsModel.safeParse(response.data);

		if (!parseSettingsResult.success) {
			throw parseSettingsResult.error.message;
		}

		return parseSettingsResult.data;
	});

	const registrationEnabled =
		data !== undefined && data.registrationIsEnabled && error === null;

	return (
		<Layout>
			<NextSeo title="Login" />
			<div className={styles.body}>
				<div className="columns">
					<div
						className={`col-md-4 ${
							registrationEnabled ? "col-ml-auto" : "col-mx-auto"
						}`}
					>
						<h2 className={styles.title}>Login to blog</h2>
						<LoginForm />
					</div>

					{registrationEnabled && (
						<>
							<div
								className={multipleClassNames("divider-vert", styles.divider)}
								data-content="OR"
							/>
							<div className="col-md-4 col-mr-auto">
								<h2 className={styles.title}>Create new account</h2>
								<SignupForm />
							</div>
						</>
					)}
				</div>
				{isLoading && (
					<div className="columns">
						<div className="col col-mx-auto">
							<div className="loading loading-lg" />
						</div>
					</div>
				)}
			</div>
		</Layout>
	);
};

export default Login;
