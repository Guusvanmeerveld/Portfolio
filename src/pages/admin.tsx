import { NextPage } from "next";
import { NextSeo } from "next-seo";

import styles from "./admin.module.scss";

import { Post, User } from "@prisma/client";

import prisma from "@utils/prisma";
import { withSessionSsr } from "@utils/session";

import Layout from "@components/Layout";

const AdminPage: NextPage<{
	user: User;
	users: User[];
	posts: (Post & { author: User })[];
}> = ({ user, users, posts }) => {
	return (
		<Layout>
			<NextSeo title="Admin" />
			<div className={styles.body}>
				<div className="container">
					<div className="columns">
						<div className="col col-8 col-mx-auto">
							<h3>Welcome {user.name}</h3>
						</div>
						<div className="col col-8 col-md-12 col-mx-auto py-2">
							<h4>Users</h4>
							<table className="table table-striped table-hover mb-2">
								<thead>
									<tr>
										<th>id</th>
										<th>name</th>
										<th>email</th>
										<th>admin</th>
										<th>postCount</th>
									</tr>
								</thead>
								<tbody>
									{users.map((user, i) => (
										<tr key={user.id} className={i % 2 === 0 ? "active" : ""}>
											<td>{user.id}</td>
											<td>{user.name}</td>
											<td>{user.email}</td>
											<td>{user.admin ? "true" : "false"}</td>
											<td>0</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						<div className="col col-8 col-md-12 col-mx-auto">
							<h4>Posts</h4>
							<table className="table table-striped table-hover">
								<thead>
									<tr>
										<th>id</th>
										<th>title</th>
										<th>content</th>
										<th>published</th>
										<th>createdAt</th>
										<th>tags</th>
										<th>author</th>
									</tr>
								</thead>
								<tbody>
									{posts.map((post, i) => (
										<tr key={post.id} className={i % 2 === 0 ? "active" : ""}>
											<td>{post.id}</td>
											<td>{post.title}</td>
											<td>{post.content}</td>
											<td>{post.published ? "true" : "false"}</td>
											<td>{new Date(post.createdAt).toLocaleString()}</td>
											<td>{post.tags}</td>
											<td>{post.author.name}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export const getServerSideProps = withSessionSsr(async ({ req }) => {
	const user = req.session.user;

	if (user === undefined || !user.admin) return { notFound: true };

	const posts = await prisma.post.findMany({
		orderBy: { createdAt: "desc" },
		take: 5,
		include: { author: true }
	});

	const users = await prisma.user.findMany({
		orderBy: { id: "desc" },
		take: 5
	});

	return {
		props: {
			user,
			users,
			posts: posts.map((post) => ({
				...post,
				createdAt: post.createdAt.getTime(),
				tags: post.tags.join(", "),
				content: post.content?.slice(0, 100).concat("...")
			}))
		}
	};
});

export default AdminPage;
