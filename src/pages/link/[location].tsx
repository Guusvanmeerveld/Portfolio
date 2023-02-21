import { GetServerSideProps, NextPage } from "next";

import prisma from "@utils/prisma";

const LinkRedirectPage: NextPage = () => {
	return <></>;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const location = params?.location;

	if (location === undefined || typeof location !== "string")
		return { notFound: true };

	const link = await prisma.link.findFirst({ where: { location } });

	if (link === null) return { notFound: true };

	return { redirect: { destination: link.remoteAddress, permanent: false } };
};

export default LinkRedirectPage;
