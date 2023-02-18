import axios from "axios";

import { FormEvent, useCallback, useState } from "react";

import { NextPage } from "next";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

import { User } from "@prisma/client";

import Layout from "@components/Layout";

import { withSessionSsr } from "@utils/session";
import { parseAxiosError, parseAxiosResponse } from "@utils/fetch";
import { parseUserInputError } from "@utils/errors";

import { Post } from "@models/post";
import { Response } from "@models/response";

import styles from "./new.module.scss";

const NewPostPage: NextPage<{ user: User }> = ({ user }) => {
	const [title, setTitle] = useState("");
	const [tags, setTags] = useState("");
	const [content, setContent] = useState("");
	const [publish, setPublish] = useState(false);

	const [error, setError] = useState<string | null>(null);

	const router = useRouter();

	const createPost = useCallback(
		async (e: FormEvent) => {
			e.preventDefault();

			const parseUserInputResult = Post.safeParse({
				title,
				tags,
				content,
				publish
			});

			if (!parseUserInputResult.success) {
				setError(parseUserInputError(parseUserInputResult.error.message));
				return;
			}

			const response: Response = await axios
				.post("/api/blog/new", parseUserInputResult.data)
				.then(parseAxiosResponse)
				.catch(parseAxiosError);

			if (response.ok) {
				router.push("/blog");
			} else {
				setError(JSON.stringify(response.error));
			}
		},
		[title, tags, content, publish, router]
	);

	return (
		<Layout>
			<NextSeo title="New post" />
			<div className={styles.body}>
				<div className="container">
					<div className="columns">
						<div className="column col-8 col-md-12 col-mx-auto">
							<h2>Create new post</h2>
							<h5>Logged in as {user.name}</h5>
							<form onSubmit={createPost}>
								<div className="form-group">
									<label className="form-label" htmlFor="title">
										Post title
									</label>
									<input
										value={title}
										onChange={(e) => setTitle(e.target.value)}
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
										value={tags}
										onChange={(e) => setTags(e.target.value)}
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
										value={content}
										onChange={(e) => setContent(e.target.value)}
										style={{ resize: "none" }}
										placeholder="Some content"
										required
										className="form-input"
										name="content"
										id="content"
										minLength={100}
										cols={30}
										rows={10}
									/>

									<label className="form-checkbox">
										<input
											checked={publish}
											onChange={() => setPublish((state) => !state)}
											name="published"
											type="checkbox"
										/>
										<i className="form-icon" /> Publish
									</label>

									{error !== null && (
										<div className="toast toast-error my-2">
											<button
												className="btn btn-clear float-right"
												onClick={() => setError(null)}
											/>
											{error}
										</div>
									)}

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
