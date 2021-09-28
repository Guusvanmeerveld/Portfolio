import Link from 'next/link';

import { FC } from 'react';

import styles from './PageBuilder.module.scss';

const PageBuilder: FC<{ header: string; subtitle: string; button: string }> = ({
	header,
	subtitle,
	button,
	children,
}) => (
	<div className={styles.body}>
		<div>
			{children}
			<div className={styles.header}>{header}</div>
			<div className={styles.subtitle}>{subtitle}</div>
			<Link href="/">
				<a className={styles.link + ' button'}>{button}</a>
			</Link>
		</div>
	</div>
);

export default PageBuilder;
