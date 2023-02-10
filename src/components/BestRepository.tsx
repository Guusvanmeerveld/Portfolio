import Link from "next/link";

import { FC } from "react";
import z from "zod";

import { format as formatTimeAgo } from "timeago.js";

import { RepositoryResponse } from "@models/responses";

const BestRepository: FC<{ repository: z.infer<typeof RepositoryResponse> }> =
	({ repository }) => {
		return (
			<div className="hero bg-primary">
				<div className="container">
					<div className="columns">
						<div className="column col-8 col-md-12 col-mx-auto">
							<h3 className="text-secondary">My most popular project:</h3>
							<h1>{repository.full_name}</h1>

							<h5>{repository.description}</h5>
							<p className="text-secondary">
								Written in {repository.language}, has{" "}
								{repository.open_issues_count} issue(s) and{" "}
								{repository.forks_count} fork(s).
							</p>

							<p>
								<Link href={repository.html_url}>
									<a className="btn mr-2">Github</a>
								</Link>
								{repository.website && (
									<Link href={repository.website}>
										<a className="btn">Website</a>
									</Link>
								)}
							</p>

							<h5 className="text-secondary">
								Last updated {formatTimeAgo(repository.updated_at, "en_US")}
							</h5>
						</div>
					</div>
				</div>
			</div>
		);
	};

export default BestRepository;
