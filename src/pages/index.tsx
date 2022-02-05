import { GetStaticProps, NextPage } from 'next';

import axios, { AxiosError } from 'axios';
import chalk from 'chalk';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import ProjectModel from '@models/project';

import Layout from '@components/Layout';
import Page from '@components/Page';

import Project from '@components/Project';

import { ProfileImage } from '@svg/index';

import styles from './Index.module.scss';

const Home: NextPage<{ projects: ProjectModel[] }> = ({ projects }) => {
	return (
		<Page description="A simple portfolio website to display my projects." title="Home">
			<Layout>
				<div className={styles.body}>
					<div className={styles.content + ' container'}>
						<div className={styles.profile}>
							<ProfileImage height={100} width={100} className="profile" />
						</div>

						<h1>Guus van Meerveld</h1>
						<h4 className={styles.subtitle}>Full-stack developer</h4>

						<a href="#projects" className="button">
							Check out my projects
						</a>
					</div>
				</div>

				<div className={styles.projects}>
					<div className="container">
						<h1 className={styles.projectsHeader} id="projects">
							Projects
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

export const getStaticProps: GetStaticProps = async () => {
	const projects: ProjectModel[] | undefined = await axios
		.get(`https://${process.env.CDN_ENDPOINT}/portfolio/projects-en.json`)
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
				projects,
			},
		};
	}

	throw new Error('Failed to retrieve projects from ' + process.env.CDN_ENDPOINT);
};

export default Home;
