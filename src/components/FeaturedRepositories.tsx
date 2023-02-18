import Link from "next/link";
import { format as formatTimeAgo } from "timeago.js";
import z from "zod";

import styles from "./repositories.module.scss";

import { FC } from "react";

import { RepositoryResponse } from "@models/git/responses";

import multipleClassNames from "@utils/multipleClassNames";

const FeaturedRepositories: FC<{
	repositories: z.infer<typeof RepositoryResponse>[];
}> = ({ repositories }) => {
	return (
		<div className={multipleClassNames("container", styles.main)}>
			<div className="columns">
				<div className="column col-6 col-mx-auto text-center">
					<h3>Some of my featured projects:</h3>
				</div>
			</div>
			<div className="columns">
				<div className="column col-9 col-mx-auto">
					<div className="columns">
						{repositories.map((repository) => {
							return (
								<div
									key={repository.full_name}
									className="column col-3 col-md-12 col-mx-auto mb-2"
								>
									<div
										className={multipleClassNames(
											"card",
											"text-center",
											styles.card
										)}
									>
										<div className="card-header text-primary">
											<div className="card-title h5">
												{repository.full_name}
											</div>
											<div className="card-subtitle text-gray">
												{(repository.size / 1024).toPrecision(2)} MB - Last
												updated {formatTimeAgo(repository.updated_at, "en_US")}
											</div>
										</div>
										<div className="card-body">{repository.description}</div>
										<div className="card-footer">
											<Link href={repository.html_url}>
												<a className="btn btn-primary">Git</a>
											</Link>

											{repository.website && (
												<Link href={repository.website}>
													<a className="btn btn-primary ml-2">Website</a>
												</Link>
											)}
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturedRepositories;
