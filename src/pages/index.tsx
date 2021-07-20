import { GetStaticProps, NextPage } from 'next';

import { useI18n } from 'next-localization';

import Image from 'next/image';

import Layout from '@components/Layout';
import Page from '@components/Page';

import Project from '@components/Project';
import projects from '@config/projects.json';

import styles from './Home.module.scss';

const Home: NextPage = () => {
	const { t } = useI18n();

	return (
		<Page description={t('pages.home.description')} title={t('pages.home.title')}>
			<Layout>
				<div className={styles.body}>
					<div className={styles.content + ' container'}>
						<span className={styles.profile + ' profile'}>
							<Image src="/assets/images/profile.svg" width={100} height={100} alt="" />
						</span>

						<span className={styles.title}>Guus van Meerveld</span>
						<span className={styles.subtitle}>{t('pages.home.subtitle')}</span>

						<a href="#projects" className="button">
							{t('pages.home.projects.button')}
						</a>
					</div>
				</div>

				<div className={styles.projects}>
					<div className="container">
						<div className={styles.header} id="projects">
							Projects
						</div>

						{projects.map((project, i) => {
							const props = { ...project, right: (i + 1) % 2 == 0 };
							return <Project key={project.name} {...props} />;
						})}
					</div>
				</div>
			</Layout>
		</Page>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	const { default: lngDict = {} } = await import(`../locales/${locale}.json`);

	return {
		props: { lngDict },
	};
};

export default Home;
