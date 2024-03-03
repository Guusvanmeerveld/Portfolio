import { GetServerSideProps, NextPage } from "next";
import z from "zod";

import { LinkIdFromString } from "@models/link";

import { withSessionSsr } from "@utils/session";

const EditLinkPage: NextPage = () => {
	return <></>;
};

export const getServerSideProps: GetServerSideProps = withSessionSsr(
	async ({ req, params }) => {
		const user = req.session.user;

		if (user === undefined) return { notFound: true };

		const parseParamsResult = z
			.object({ id: LinkIdFromString })
			.safeParse(params);

		if (!parseParamsResult.success) return { notFound: true };
	}
);

export default EditLinkPage;
