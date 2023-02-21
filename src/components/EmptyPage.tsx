import styles from "./emptyPage.module.scss";

import { FC } from "react";

const EmptyPage: FC = ({ children }) => {
	return (
		<div className={styles.body}>
			<div className="container">{children}</div>
		</div>
	);
};

export default EmptyPage;
