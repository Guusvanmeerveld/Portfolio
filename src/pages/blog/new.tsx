import { NextPage } from "next";
import { NextSeo } from "next-seo";

import { User } from "@prisma/client";

import Layout from "@components/Layout";

import { withSessionSsr } from "@utils/session";

import styles from "./new.module.scss";

const NewPostPage: NextPage<{ user: User }> = ({ user }) => {
	return (
		<Layout>
			<NextSeo title="New post" />
			<div className={styles.body}>
				<div className="container">
					<div className="columns">
						<div className="column col-8 col-md-12 col-mx-auto">
							<h2>Create new post</h2>
							<h5>Logged in as {user.name}</h5>
							<form action="/api/blog/new" method="post">
								<div className="form-group">
									<label className="form-label" htmlFor="title">
										Post title
									</label>
									<input
										required
										className="form-input"
										name="title"
										type="text"
										id="title"
										placeholder="Title"
									/>

									<label className="form-label" htmlFor="tags">
										Tags
									</label>
									<input
										required
										className="form-input"
										name="tags"
										type="text"
										id="tags"
										placeholder="A space seperated list of tags"
									/>

									<label className="form-label" htmlFor="content">
										Content
									</label>
									<textarea
										style={{ resize: "none" }}
										placeholder="Some content"
										required
										className="form-input"
										name="content"
										id="content"
										cols={30}
										rows={10}
									/>

									<label className="form-checkbox">
										<input name="published" type="checkbox" />
										<i className="form-icon" /> Publish
									</label>

									<input
										className={"btn btn-primary"}
										type="submit"
										value="Create post"
									/>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export const getServerSideProps = withSessionSsr(({ req }) => {
	const user = req.session.user;

	if (user === undefined) {
		return {
			notFound: true
		};
	}

	return {
		props: {
			user: req.session.user
		}
	};
});

export default NewPostPage;
