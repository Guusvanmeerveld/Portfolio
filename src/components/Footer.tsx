import { FC } from "react";

import Link from "next/link";

import multipleClassNames from "@utils/multipleClassNames";

import styles from "./footer.module.scss";

const Footer: FC = () => {
	return (
		<footer className={multipleClassNames("container", styles.main)}>
			<div className="columns">
				<div className="column col-8 col-md-12 col-mx-auto">
					<h3>Guus van Meerveld</h3>
					<div className="columns mb-2">
						<div className="column col-12">
							<Link
								href={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`}
							>
								<a className="mr-2">Github</a>
							</Link>
							&middot;
							<Link href="https://twitter.com/Guusvanmeerveld">
								<a className="mx-2">Twitter</a>
							</Link>
							&middot;
							<Link href="https://ko-fi.com/Guusvanmeerveld">
								<a className="mx-2">Ko-fi</a>
							</Link>
							&middot;
							<Link href="https://youtube.com/channel/UCYuqpoMay5SezCBrA_HKVWQ">
								<a className="mx-2">Youtube</a>
							</Link>
						</div>
					</div>
					<p>
						Built with{" "}
						<span role="img" aria-label="heart emoji">
							❤️
						</span>{" "}
						by Guus van Meerveld, using{" "}
						<Link href="https://picturepan2.github.io/spectre">
							<a>Spectre.css</a>
						</Link>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
