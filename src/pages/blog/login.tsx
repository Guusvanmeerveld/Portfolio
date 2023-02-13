import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";

import Layout from "@components/Layout";

import multipleClassNames from "@utils/multipleClassNames";

import styles from "./login.module.scss";
import { registrationIsEnabled } from "@utils/config";

const Login: NextPage<{ registrationIsEnabled: boolean }> = ({
	registrationIsEnabled
}) => {
	return (
		<Layout>
			<NextSeo title="Login" />
			<div className={styles.body}>
				<div className="columns">
					<div
						className={`col-md-4 ${
							registrationIsEnabled ? "col-ml-auto" : "col-mx-auto"
						}`}
					>
						<h2 className={styles.title}>Login to blog</h2>
						<form action="/api/blog/login" method="post">
							<div className="form-group">
								<label className="form-label" htmlFor="email">
									Email address
								</label>
								<input
									required
									className="form-input"
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
									minLength={8}
									maxLength={128}
									name="password"
									type="password"
									id="password"
								/>
								<label className="form-checkbox">
									<input name="rememberMe" type="checkbox" />
									<i className="form-icon" /> Remember me
								</label>
								<input
									className={multipleClassNames(
										"btn btn-primary",
										styles.loginButton
									)}
									type="submit"
									value="Login"
								/>
							</div>
						</form>
					</div>
					{registrationIsEnabled && (
						<>
							<div
								className={multipleClassNames("divider-vert", styles.divider)}
								data-content="OR"
							/>
							<div className="col-md-4 col-mr-auto">
								<h2 className={styles.title}>Create new account</h2>
								<form action="/api/blog/signup" method="post">
									<div className="form-group">
										<label className="form-label" htmlFor="email">
											Email address
										</label>
										<input
											required
											className="form-input"
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
											maxLength={32}
											name="name"
											type="text"
											id="name"
										/>

										<input
											className={multipleClassNames(
												"btn btn-primary",
												styles.signupButton
											)}
											type="submit"
											value="Signup"
										/>
									</div>
								</form>
							</div>
						</>
					)}
				</div>
			</div>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	return { props: { registrationIsEnabled } };
};

export default Login;
