import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	const { default: lngDict = {} } = await import(`./locales/${locale}.json`);

	return {
		props: { lngDict },
	};
};
