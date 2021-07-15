import { FC } from 'react';

import ProjectType from '@models/project';

interface ProjectComponent extends ProjectType {
	right: boolean;
}

const Project: FC<ProjectComponent> = ({ name, description, buttons, cover, right }) => {
	return (
		<div className="project">
			<div className="content">
				<div className={right ? 'info right' : 'info'}>
					<div className="title">{name}</div>
					{description}
					<br />
					<br />
					{buttons.map((button, i) => (
						<a href={button.link} className="button" key={i}>
							{button.text}
						</a>
					))}
				</div>
				{cover ? (
					<div className="cover">
						<img src={`/assets/images/${cover}`} width="100%" height="100%" alt="" />
					</div>
				) : null}
			</div>
		</div>
	);
};

export default Project;
