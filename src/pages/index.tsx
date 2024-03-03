import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { NextSeo } from "next-seo";

import Landing from "@models/landing";

import { readLandingJson } from "@utils/landing";

import Layout from "@components/Layout";
import User from "@components/User";

export const getStaticProps: GetStaticProps<Landing> = async () => {
	const landing = await readLandingJson();

	if (landing === null) return { revalidate: 1, notFound: true };

	return { props: landing };
};

const Index: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (
	landing
) => (
	<Layout>
		<NextSeo title="Home" />
		<User owner={landing.owner} />
	</Layout>
);

export default Index;
