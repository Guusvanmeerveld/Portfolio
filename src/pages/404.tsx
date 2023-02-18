import { NextPage } from "next";
import { useRouter } from "next/router";

import styles from "./404.module.scss";

import multipleClassNames from "@utils/multipleClassNames";

import Layout from "@components/Layout";

const NotFound: NextPage = () => {
	const router = useRouter();

	return (
		<Layout>
			<div className={multipleClassNames("empty", styles.main)}>
				<div>
					<div className="empty-icon">
						<i className="icon icon-stop"></i>
					</div>
					<p className="empty-title h5">Page not found</p>
					<p className="empty-subtitle">
						The page has either been deleted or moved
					</p>
					<div className="empty-action">
						<button onClick={() => router.back()} className="btn btn-primary">
							Go back
						</button>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default NotFound;
