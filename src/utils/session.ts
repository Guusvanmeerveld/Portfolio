import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";
import {
	GetServerSidePropsContext,
	GetServerSidePropsResult,
	NextApiHandler
} from "next";

import { sessionOptions } from "./config";

import { User } from "@prisma/client";

export const withIronSession = (handler: NextApiHandler) =>
	withIronSessionApiRoute(handler, sessionOptions);

export function withSessionSsr<
	P extends { [key: string]: unknown } = { [key: string]: unknown }
>(
	handler: (
		context: GetServerSidePropsContext
	) => GetServerSidePropsResult<P> | Promise<GetServerSidePropsResult<P>>
) {
	return withIronSessionSsr(handler, sessionOptions);
}

declare module "iron-session" {
	interface IronSessionData {
		user?: User;
	}
}
