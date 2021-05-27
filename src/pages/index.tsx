import { NextPage } from 'next';

import Contact from '@components/Contact';
import Layout from '@components/Layout';
import Page from '@components/Page';

import Project from '@components/Project';
import projects from '@config/projects.json';

const Home: NextPage = () => (
	<Page description="A simple portfolio website to display my projects." title="Home">
		<Layout>
			<div className="landing">
				<div className="container">
					<span className="profile">
						<img src="/assets/images/profile.svg" width="100%" height="100%" alt="" />
					</span>

					<span className="title">Guus van Meerveld</span>
					<span className="subtitle">
						TypeScript / Dart developer, <br />
						currently working on Argo.
					</span>

					<a href="#projects" className="button d-block m-auto">
						Check out my projects
					</a>
				</div>
			</div>

			<div className="projects">
				<div className="container">
					<div className="header" id="projects">
						Projects
					</div>

					{projects.map((project) => (
						<Project key={project.name} {...project} />
					))}
				</div>
			</div>

			<Contact />
		</Layout>
	</Page>
);

export default Home;
