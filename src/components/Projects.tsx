import { NextPage } from 'next';

import Project from '@components/Project';
import projects from '@config/projects.json';

const Projects: NextPage = () => (
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
);

export default Projects;
