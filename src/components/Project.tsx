import { FC } from 'react';

import ProjectType from '@models/project';

import styles from './Project.module.scss';

interface ProjectComponent extends ProjectType {
	right: boolean;
}

const Project: FC<ProjectComponent> = ({ name, description, buttons, cover, right }) => {
	return (
		<div className={styles.body}>
			<div className={styles.content}>
				<div className={right ? styles.right : styles.info}>
					<div className={styles.title}>{name}</div>
					{description}
					<br />
					<br />
					{buttons.map((button, i) => (
						<a href={button.link} className={styles.button + ' button'} key={i}>
							{button.text}
						</a>
					))}
				</div>
				{cover ? (
					<div className={styles.cover}>
						<img src={`/assets/images/${cover}`} width="100%" height="100%" alt="" />
					</div>
				) : null}
			</div>
		</div>
	);
};

export default Project;
