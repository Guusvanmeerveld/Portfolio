import { FC } from 'react';

interface Button {
	link: string;
	text: string;
}

const Project: FC<{
	name: string;
	description: string;
	buttons: Button[];
	cover?: string;
	right?: boolean;
}> = ({ name, description, buttons, cover, right }) => {
	return (
		<div className="project">
			<div className="content">
				<div className={right ? 'info right' : 'info'}>
					<div className="title">{name}</div>
					{description}
					<br />
					<br />
					{buttons.map((button) => (
						<a href={button.link} className="button">
							{button.text}
						</a>
					))}
				</div>
				{cover ? (
					<div className="cover">
						<img src={cover} width="100%" height="100%" alt="" />
					</div>
				) : null}
			</div>
		</div>
	);
};

export default Project;
