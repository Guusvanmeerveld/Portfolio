import { FC } from "react";

import styles from "./intro.module.scss";

const Intro: FC<{ isAvailable: boolean }> = ({ isAvailable }) => {
	return (
		<div className={styles.main}>
			<div className="container">
				<div className="columns">
					<div className="column col-8 col-md-12 col-mx-auto text-center">
						<h1>Guus van Meerveld</h1>

						<h3>
							Open source <u>web developer</u>
						</h3>

						<p>
							<a
								target="_blank"
								rel="noreferrer"
								href={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`}
								className="btn btn-primary mr-2"
							>
								Github
							</a>

							<a
								href="mailto:contact@guusvanmeerveld.dev"
								className="btn btn-primary"
							>
								Contact
							</a>
						</p>

						<p className="text-gray">
							Availibility: {isAvailable && "Available"}
							{!isAvailable && "Not available"}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Intro;
