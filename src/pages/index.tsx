import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { NextSeo } from "next-seo";
import z from "zod";

import { RepositoryResponse } from "@models/git/responses";

import { giteaUsername } from "@utils/config";
import {
	fetchAvailability,
	fetchRepositories,
	fetchUser
} from "@utils/git/fetch";

import BestRepository from "@components/BestRepository";
import FeaturedRepositories from "@components/FeaturedRepositories";
import Layout from "@components/Layout";
import User from "@components/User";

export const getStaticProps: GetStaticProps = async () => {
	const isAvailable = await fetchAvailability();

	const user = await fetchUser(giteaUsername);

	const repositories = await fetchRepositories(user.id);

	const bestRepository: z.infer<typeof RepositoryResponse> | undefined =
		repositories.reduce((prev, current) =>
			prev.stars_count > current.stars_count ? prev : current
		);

	return {
		props: {
			isAvailable,
			user,
			bestRepository,
			repositories
		},
		revalidate: 60 * 5
	};
};

const Index: NextPage = ({
	repositories,
	user,
	bestRepository,
	isAvailable
}: InferGetStaticPropsType<typeof getStaticProps>) => (
	<Layout>
		<NextSeo title="Home" />
		<User isAvailable={isAvailable} user={user} />
		<FeaturedRepositories repositories={repositories} />
		<BestRepository repository={bestRepository} />
	</Layout>
);

export default Index;
