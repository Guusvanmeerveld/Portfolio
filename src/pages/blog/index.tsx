import Link from "next/link";
import { NextPage } from "next";
import { NextSeo } from "next-seo";

import { Post, User } from "@prisma/client";

import Layout from "@components/Layout";

import { withSessionSsr } from "@utils/session";
import prisma from "@utils/prisma";

import PostComponent from "@components/Post";

import styles from "./blog.module.scss";

const Blog: NextPage<{
	posts: (Post & {
		author: User;
	})[];
	user: User | null;
}> = ({ posts, user }) => {
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
					{user && (
						<div className="columns">
							<div className="column col-8 col-md-12 col-mx-auto">
								<Link href="/blog/new">New post</Link> &middot;{" "}
								<Link href="/api/blog/logout">Logout</Link>
							</div>
						</div>
					)}
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

export const getServerSideProps = withSessionSsr(
	async ({
		req
		//  query
	}) => {
		const user = req.session.user ?? null;

		// let cursor = 0;
		// if (!Array.isArray(query.cursor) && query.cursor !== undefined) {
		// 	cursor = parseInt(query.cursor);
		// }

		const posts = await prisma.post.findMany({
			where: { published: user ? undefined : true },
			orderBy: { createdAt: "desc" },
			take: 5,
			include: { author: true }
		});

		return {
			props: {
				user,
				posts: posts.map((post) => ({
					...post,
					createdAt: post.createdAt.toString(),
					content: post.content?.split("\n")[0]
				}))
			}
		};
	}
);

export default Blog;
