import { FC } from "react";

import Link from "next/link";

import { RecentRepository } from "@interfaces/repository";

import multipleClassNames from "@utils/multipleClassNames";

import styles from "./repositories.module.scss";

const RecentRepositories: FC<{ repositories: RecentRepository[] }> = ({
	repositories
}) => {
	return (
		<div className={multipleClassNames("container", styles.main)}>
			<div className="columns">
				<div className="column col-6 col-mx-auto text-center">
					<h3>Some of my recent projects:</h3>
				</div>
			</div>
			<div className="columns">
				<div className="column col-9 col-mx-auto">
					<div className="columns">
						{repositories.map((repository) => {
							return (
								<div
									key={repository.name}
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
											<div className="card-title h5">{repository.name}</div>
											<div className="card-subtitle text-gray">
												{repository.stargazers_count} Star(s)
											</div>
										</div>
										<div className="card-body">{repository.description}</div>
										<div className="card-footer">
											<Link href={repository.url}>
												<a className="btn btn-primary">Github</a>
											</Link>

											{repository.homepage && (
												<Link href={repository.homepage}>
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

export default RecentRepositories;
