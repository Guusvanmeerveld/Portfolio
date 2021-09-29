import { GetStaticProps, NextPage } from 'next';

import axios from 'axios';

import Image from 'next/image';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Layout from '@components/Layout';
import Page from '@components/Page';

import Project from '@components/Project';
import ProjectModel from '@models/project';

import styles from './Index.module.scss';

const Home: NextPage<{ projects: ProjectModel[] }> = ({ projects }) => {
	const { t } = useTranslation('home');

	return (
		<Page description={t('description')} title={t('title')}>
			<Layout>
				<div className={styles.body}>
					<div className={styles.content + ' container'}>
						<div className={styles.profile + ' profile'}>
							<Image src="/assets/images/profile.svg" width={100} height={100} alt="" />
						</div>

						<h1>Guus van Meerveld</h1>
						<h4 className={styles.subtitle}>{t('subtitle')}</h4>

						<a href="#projects" className="button">
							{t('projects.button')}
						</a>
					</div>
				</div>

				<div className={styles.projects}>
					<div className="container">
						<h1 className={styles.projectsHeader} id="projects">
							{t('projects.title')}
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
	const { data: projects } = await axios(
		`https://${process.env.API_ENDPOINT}/portfolio/projects-${locale}.json`
	);

	return {
		props: {
			...(await serverSideTranslations(locale, ['home', 'nav'])),
			projects,
		},
	};
};

export default Home;
