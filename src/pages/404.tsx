import { GetStaticProps, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Page from '@components/Page';
import Layout from '@components/Layout';
import PageBuilder from '@components/PageBuilder';

const NotFound: NextPage = () => {
	const { t } = useTranslation('404');

	return (
		<Page title={t('title')} description={t('description')}>
			<Layout>
				<PageBuilder button={t('back')} header={t('title')} subtitle={t('description')} />
			</Layout>
		</Page>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale, ['404', 'nav'])),
		},
	};
};

export default NotFound;
