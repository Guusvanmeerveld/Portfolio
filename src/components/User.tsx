import { FC } from "react";
import z from "zod";

import Image from "next/image";

import { UserResponse } from "@models/git/responses";
import { giteaServerUrl } from "@utils/config";
import multipleClassNames from "@utils/multipleClassNames";

import styles from "./user.module.scss";

const User: FC<{ isAvailable: boolean; user: z.infer<typeof UserResponse> }> =
	({ isAvailable, user }) => {
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
									src={user.avatar_url}
									className={styles.avatar}
									width={256}
									height={256}
									alt={`${user.full_name}'s avatar`}
								/>
							</div>
						</div>
						<div className="column col-8 col-md-12 col-mx-auto">
							<h1>{user.full_name}</h1>

							<h3>{user.description}</h3>

							<p>
								<a
									target="_blank"
									rel="noreferrer"
									href={`https://${giteaServerUrl}/${user.login}`}
									className="btn btn-primary mr-2"
								>
									Git
								</a>

								<a href={`mailto:${user.email}`} className="btn btn-primary">
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

export default User;
