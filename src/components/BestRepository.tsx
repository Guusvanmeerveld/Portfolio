import Link from "next/link";

import { FC } from "react";

import { BestRepository } from "@interfaces/repository";

const BestRepository: FC<{ repository: BestRepository }> = ({ repository }) => {
	return (
		<div className="hero bg-primary">
			<div className="container">
				<div className="columns">
					<div className="column col-8 col-mx-auto">
						<h3 className="text-secondary">My most popular project:</h3>
						<h1>{repository.name}</h1>
						<h3 className="text-secondary">
							{repository.stargazers_count} Star(s)
						</h3>
						<h5>{repository.description}</h5>
						<p className="text-secondary">
							Written in {repository.language}, has{" "}
							{repository.open_issues_count} issue(s) and{" "}
							{repository.forks_count} fork(s).
						</p>

						<Link href={repository.url}>
							<a className="btn mr-2">Github</a>
						</Link>
						{repository.homepage && (
							<Link href={repository.homepage}>
								<a className="btn">Website</a>
							</Link>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default BestRepository;
