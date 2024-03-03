import Image from "next/image";
import Link from "next/link";

import styles from "./user.module.scss";

import { FC } from "react";

import Owner from "@models/owner";

import multipleClassNames from "@utils/multipleClassNames";

const User: FC<{ owner: Owner }> = ({ owner }) => {
	return (
		<div className={styles.main}>
			<div className="container">
				<div className="columns">
					<div
						className={multipleClassNames(
							"column",
							"col-4",
							"col-mx-auto",
							styles.avatarCol
						)}
					>
						<div className={styles.avatarContainer}>
							<Image
								src={owner.avatar ?? ""}
								className={styles.avatar}
								width={256}
								height={256}
								alt={`${owner.name}'s avatar`}
							/>
						</div>
					</div>
					<div className="column col-8 col-md-12 col-mx-auto">
						<h1>{owner.fullName}</h1>

						<h3>{owner.description}</h3>

						<p>
							<Link
								target="_blank"
								rel="noreferrer"
								href={owner.contact.git}
								className="btn btn-primary mr-2"
							>
								Git
							</Link>

							<Link
								target="_blank"
								rel="noreferrer"
								href={owner.contact.linkedin}
								className="btn btn-primary mr-2"
							>
								Git
							</Link>

							<Link
								href={`mailto:${owner.contact.email}`}
								className="btn btn-primary"
							>
								Contact
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default User;
