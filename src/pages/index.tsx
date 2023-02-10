import { NextSeo } from "next-seo";

import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

import User from "@components/User";
import Layout from "@components/Layout";
import FeaturedRepositories from "@components/FeaturedRepositories";
import BestRepository from "@components/BestRepository";

import { fetchAvailability, fetchRepositories, fetchUser } from "@utils/fetch";
import { giteaUsername } from "@utils/config";

export const getStaticProps: GetStaticProps = async () => {
	const isAvailable = await fetchAvailability();

	const user = await fetchUser(giteaUsername);

	const repositories = await fetchRepositories(user.id);

	return {
		props: {
			isAvailable,
			user,
			repositories
		},
		revalidate: 60 * 5
	};
};

const Index: NextPage = ({
	repositories,
	user,
	isAvailable
}: // bestRepository
InferGetStaticPropsType<typeof getStaticProps>) => (
	<Layout>
		<NextSeo title="Home" />
		<User isAvailable={isAvailable} user={user} />
		<FeaturedRepositories repositories={repositories} />
		{/* <BestRepository repository={bestRepository} /> */}
	</Layout>
);

export default Index;
