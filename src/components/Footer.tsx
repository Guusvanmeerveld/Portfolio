import Link from "next/link";

import styles from "./footer.module.scss";

import { FC } from "react";

import { giteaServerUrl, giteaUsername } from "@utils/config";
import multipleClassNames from "@utils/multipleClassNames";

const Footer: FC = () => {
	return (
		<footer className={multipleClassNames("container", styles.main)}>
			<div className="columns">
				<div className="column col-8 col-md-12 col-mx-auto">
					<div className="columns mb-2">
						<div className="col col-12">
							<h3>Guus van Meerveld</h3>
						</div>
						<div className="col col-12">
							<Link href={`https://${giteaServerUrl}/${giteaUsername}`}>
								<a className="mr-2">Git</a>
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
						<div className="col col-12">
							<span>Pages: </span>
							<Link href={{ pathname: "/" }}>
								<a className="mr-2">Home</a>
							</Link>
							&middot;
							<Link href={{ pathname: "/blog" }}>
								<a className="mx-2">Blog</a>
							</Link>
							&middot;
							<Link href={{ pathname: "/link" }}>
								<a className="mx-2">Links</a>
							</Link>
							&middot;
							<Link href={{ pathname: "/login" }}>
								<a className="mx-2">Login</a>
							</Link>
						</div>
						<div className="col col-12">
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
				</div>
			</div>
		</footer>
	);
};

export default Footer;
