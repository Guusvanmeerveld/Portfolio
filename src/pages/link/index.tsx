import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import Link from "next/link";

import { Link as LinkType } from "@prisma/client";

import useUser from "@utils/hooks/useUser";
import prisma from "@utils/prisma";

import EmptyPage from "@components/EmptyPage";
import Layout from "@components/Layout";
import LinkComponent from "@components/LinkComponent";

const LinksPage: NextPage<{ links: LinkType[] }> = ({ links }) => {
	const user = useUser();

	return (
		<Layout>
			<NextSeo title="Links" />
			<EmptyPage>
				<div className="columns">
					<div className="col col-8 col-mx-auto">
						<h1>Links</h1>
						<div className="container">
							<div className="columns">
								<div className="col col-11">
									<h5>This is a collection of quick usefull links</h5>
								</div>
								{user !== null && (
									<div className="col col-1">
										<Link href="/link/new">
											<a>new</a>
										</Link>
									</div>
								)}
							</div>
						</div>
					</div>
					<div className="col col-8 col-mx-auto">
						{links.length < 1 && <h2>No links yet</h2>}
						{links.map((link) => (
							<LinkComponent key={link.id} link={link} />
						))}
					</div>
				</div>
			</EmptyPage>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const links = await prisma.link
		.findMany({
			orderBy: { id: "desc" },
			take: 5
		})
		.catch(() => []);

	return { props: { links }, revalidate: 1 * 60 };
};

export default LinksPage;
