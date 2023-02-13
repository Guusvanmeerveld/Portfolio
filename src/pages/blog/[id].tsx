import { NextSeo } from "next-seo";
import { NextPage } from "next";

import { Post, User } from "@prisma/client";

import Layout from "@components/Layout";
import Tags from "@components/Tags";

import { withSessionSsr } from "@utils/session";
import prisma from "@utils/prisma";

import styles from "./[id].module.scss";

const PostPage: NextPage<{
	post: Post & {
		author: User;
	};
	user: User | null;
}> = ({ post }) => {
	return (
		<Layout>
			<NextSeo title={post.title} />
			<div className={styles.body}>
				<div className="container">
					<div className="columns">
						<div className="column col-2" />
						<div className="column col-6 col-md-12">
							<h1>{post.title}</h1>
							<h4>
								by {post.author.name} on{" "}
								{new Date(post.createdAt).toLocaleDateString()}
							</h4>
							<Tags tags={post.tags} />
							<p style={{ whiteSpace: "pre-line" }} className="mt-2">
								{post.content}
							</p>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export const getServerSideProps = withSessionSsr(async ({ req, params }) => {
	if (!params?.id || Array.isArray(params?.id)) return { notFound: true };

	const postId = parseInt(params?.id);

	if (Number.isNaN(postId)) return { notFound: true };

	const post = await prisma.post.findUnique({
		where: { id: postId },
		include: { author: true }
	});

	if (post === null) return { notFound: true };

	const user = req.session.user ?? null;

	return {
		props: {
			user,
			post: {
				...post,
				createdAt: post.createdAt.toString()
			}
		}
	};
});

export default PostPage;
