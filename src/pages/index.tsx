import { GetStaticProps, NextPage } from 'next';

import { useI18n } from 'next-localization';

import Image from 'next/image';

import Layout from '@components/Layout';
import Page from '@components/Page';

import Project from '@components/Project';
import projects from '@config/projects.json';

import styles from './home.module.scss';

const Home: NextPage = () => {
	const { t } = useI18n();

	return (
		<Page description={t('pages.home.description')} title={t('pages.home.title')}>
			<Layout>
				<div className={styles.body}>
					<div className={styles.content + ' container'}>
						<div className={styles.profile + ' profile'}>
							<Image src="/assets/images/profile.svg" width={100} height={100} alt="" />
						</div>

						<h1>Guus van Meerveld</h1>
						<h4 className={styles.subtitle}>{t('pages.home.subtitle')}</h4>

						<a href="#projects" className="button">
							{t('pages.home.projects.button')}
						</a>
					</div>
				</div>

				<div className={styles.projects}>
					<div className="container">
						<h1 className={styles.projectsHeader} id="projects">
							{t('nav.projects')}
						</h1>

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
