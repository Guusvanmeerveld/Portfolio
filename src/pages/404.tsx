import { GetStaticProps, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Page from '@components/Page';
import Layout from '@components/Layout';
import PageBuilder from '@components/PageBuilder';

const NotFound: NextPage = () => {
	const title = 'Page not found';
	const description = "This page either doesn't exist or has been deleted";

	return (
		<Page title={title} description={description}>
			<Layout>
				<PageBuilder button="Go back" header={title} subtitle={description} />
			</Layout>
		</Page>
	);
};

export default NotFound;
