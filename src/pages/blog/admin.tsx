import { NextPage } from "next";
import { NextSeo } from "next-seo";

import { Post, User } from "@prisma/client";

import Layout from "@components/Layout";
import { withSessionSsr } from "@utils/session";

const AdminPage: NextPage<{ user: User; posts: Post & { author: User } }> = ({
	user,
	posts
}) => {
	return (
		<Layout>
			<NextSeo title="Admin" />
			Welcome {user.name}
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

	return { props: { user, posts } };
});

export default AdminPage;
