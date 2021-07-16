import { NextPage } from 'next';

import Layout from '@components/Layout';
import Page from '@components/Page';

import Project from '@components/Project';
import projects from '@config/projects.json';

import styles from './Home.module.scss';

const Home: NextPage = () => (
	<Page description="A simple portfolio website to display my projects." title="Home">
		<Layout>
			<div className={styles.body}>
				<div className={styles.content + ' container'}>
					<span className={styles.profile + ' profile'}>
						<img src="/assets/images/profile.svg" width="100%" height="100%" alt="" />
					</span>

					<span className={styles.title}>Guus van Meerveld</span>
					<span className={styles.subtitle}>
						TypeScript / Dart developer, <br />
						currently working on Argo.
					</span>

					<a href="#projects" className="button d-block m-auto">
						Check out my projects
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

export default Home;
