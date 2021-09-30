import { GetStaticProps, NextPage } from 'next';

import axios, { AxiosError } from 'axios';
import chalk from 'chalk';

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
	const translation = await serverSideTranslations(locale, ['home', 'nav']);

	const projects: ProjectModel[] | undefined = await axios(
		`https://${process.env.CDN_ENDPOINT}/portfolio/projects-${locale}.json`
	)
		.then(({ data }) => {
			console.log(
				chalk`{magenta event} - retrieved projects from ` +
					process.env.CDN_ENDPOINT +
					' successfully'
			);

			return data;
		})
		.catch((error: AxiosError) => {
			console.log(chalk`{red error} - failed to retrieve projects:`);

			console.log(error.message);
		});

	if (projects) {
		return {
			props: {
				...translation,
				projects,
			},
		};
	}

	throw new Error('Failed to retrieve projects from ' + process.env.CDN_ENDPOINT);
};

export default Home;
