import Image from 'next/image';
import Link from 'next/link';

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
					<h2>{name}</h2>
					<div className={styles.description}>{description}</div>

					{buttons.map((button, i) => (
						<Link href={button.link} key={i}>
							<a className={styles.button + ' button'}>{button.text}</a>
						</Link>
					))}
				</div>
				{cover ? (
					<div className={styles.cover}>
						<Image
							src={`https://${process.env.CDN_ENDPOINT}/portfolio/${cover}`}
							width={200}
							height={200}
							alt={name}
						/>
					</div>
				) : null}
			</div>
		</div>
	);
};

export default Project;
