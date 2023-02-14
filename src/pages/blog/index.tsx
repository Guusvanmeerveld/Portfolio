import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";

import { Post, User } from "@prisma/client";

import Layout from "@components/Layout";

import prisma from "@utils/prisma";

import PostComponent from "@components/Post";

import styles from "./blog.module.scss";

const Blog: NextPage<{
	posts: (Post & {
		author: User;
	})[];
}> = ({ posts }) => {
	return (
		<Layout>
			<NextSeo title="Blog" />
			<div className={styles.body}>
				<div className="container">
					<div className="columns">
						<div className="column col-8 col-md-12 col-mx-auto">
							<h1>Latest posts</h1>
							<div className="divider" />
						</div>
					</div>

					{posts.length < 1 && (
						<div className="columns">
							<div className="column col-8 col-md-12 col-mx-auto">
								<h3>No posts yet</h3>
							</div>
						</div>
					)}
					{posts.length > 0 &&
						posts.map((post) => <PostComponent key={post.id} post={post} />)}
				</div>
			</div>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async (
	{
		//  query
	}
) => {
	// let cursor = 0;
	// if (!Array.isArray(query.cursor) && query.cursor !== undefined) {
	// 	cursor = parseInt(query.cursor);
	// }

	const posts = await prisma.post
		.findMany({
			where: { published: true },
			orderBy: { createdAt: "desc" },
			take: 5,
			include: { author: true }
		})
		.catch(() => []);

	return {
		props: {
			posts: posts.map((post) => ({
				...post,
				createdAt: post.createdAt.toString(),
				content: post.content?.split("\n")[0]
			}))
		},
		revalidate: 60 * 1
	};
};

export default Blog;
