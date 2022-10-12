import { NextSeo } from "next-seo";

import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

import axios from "axios";

import Intro from "@components/Intro";
import Layout from "@components/Layout";
import RecentRepositories from "@components/RecentRepositories";
import BestRepository from "@components/BestRepository";

import { GithubAPIRepository } from "@interfaces/repository";

import createConfigCatClient from "@utils/createConfigCatClient";

export const getStaticProps: GetStaticProps = async () => {
	const { data } = await axios.get<GithubAPIRepository[]>(
		`https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos`
	);

	const configCatClient = createConfigCatClient();

	const isAvailable: boolean =
		(await configCatClient?.getValueAsync("amiavailable", true)) ?? true;

	const bestRepository = data.sort(
		(a, b) => b.stargazers_count - a.stargazers_count
	)[0];

	return {
		props: {
			isAvailable,
			repositories: data
				.sort(
					(a, b) =>
						new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
				)
				.map(({ name, description, html_url, stargazers_count, homepage }) => ({
					name,
					url: html_url,
					stargazers_count,
					homepage,
					description
				}))
				.slice(0, 3),
			bestRepository: {
				name: bestRepository.name,
				description: bestRepository.description,
				url: bestRepository.html_url,
				homepage: bestRepository.homepage,
				stargazers_count: bestRepository.stargazers_count,
				forks_count: bestRepository.forks_count,
				language: bestRepository.language,
				open_issues_count: bestRepository.open_issues_count,
				pushed_at: bestRepository.pushed_at
			}
		},
		revalidate: 60 * 5
	};
};

const Index: NextPage = ({
	repositories,
	isAvailable,
	bestRepository
}: InferGetStaticPropsType<typeof getStaticProps>) => (
	<Layout>
		<NextSeo title="Home" />
		<Intro isAvailable={isAvailable} />
		<RecentRepositories repositories={repositories} />
		<BestRepository repository={bestRepository} />
	</Layout>
);

export default Index;
