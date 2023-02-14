import { NextSeo } from "next-seo";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { Post, User } from "@prisma/client";

import Layout from "@components/Layout";
import Tags from "@components/Tags";

import prisma from "@utils/prisma";

import styles from "./[id].module.scss";

const PostPage: NextPage<{
	post: Post & {
		author: User;
	};
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

export const getStaticPaths: GetStaticPaths = async ({}) => {
	const posts = await prisma.post
		.findMany({
			where: { published: true }
		})
		.catch(() => []);

	const paths = posts.map((post) => ({
		params: { id: post.id.toString() }
	}));

	// { fallback: false } means other routes should 404
	return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	if (!params?.id || Array.isArray(params?.id)) return { notFound: true };

	const postId = parseInt(params?.id);

	if (Number.isNaN(postId)) return { notFound: true };

	const post = await prisma.post.findUnique({
		where: { id: postId },
		include: { author: true }
	});

	if (post === null) return { notFound: true };

	return {
		props: {
			post: {
				...post,
				createdAt: post.createdAt.toString()
			}
		},
		revalidate: 60 * 10
	};
};

export default PostPage;
