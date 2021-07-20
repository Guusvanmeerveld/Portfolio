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
					<div className={styles.title}>{name}</div>
					{description}
					<br />
					<br />
					{buttons.map((button, i) => (
						<Link href={button.link} key={i}>
							<a className={styles.button + ' button'}>{button.text}</a>
						</Link>
					))}
				</div>
				{cover ? (
					<div className={styles.cover}>
						<Image src={`/assets/images/${cover}`} width={200} height={200} alt="" />
					</div>
				) : null}
			</div>
		</div>
	);
};

export default Project;
