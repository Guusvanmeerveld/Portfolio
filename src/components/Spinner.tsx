import { FC } from 'react';

import styles from './Spinner.module.scss';

const Spinner: FC = () => (
	<div className={styles.lds}>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</div>
);

export default Spinner;
