"use client";

import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { Spacer } from "@heroui/spacer";
import { Component } from "@typings/component";

import ProjectProps from "@models/project";

export const Projects: Component<{ data: ProjectProps[] }> = ({ data }) => {
	return (
		<>
			<div className="container mx-auto p-4 min-h-96">
				<h1 className="text-4xl text-center mb-8">Projects</h1>

				<div className="grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 ">
					{data.map((project) => {
						const url = new URL(project.url);

						return (
							<Card key={project.name}>
								<CardHeader className="flex gap-3">
									<Image
										alt={`${project.name} logo`}
										height={40}
										radius="sm"
										src={project.avatarUrl}
										width={40}
									/>
									<div className="flex flex-col">
										<p className="text-md">{project.name}</p>
										<p className="text-small text-default-500">{url.host}</p>
									</div>
								</CardHeader>
								<Divider />
								<CardBody>
									<p>{project.description}</p>
								</CardBody>
								<Divider />
								<CardFooter>
									<Link isExternal showAnchorIcon href={project.url}>
										Visit the project.
									</Link>
								</CardFooter>
							</Card>
						);
					})}
				</div>
			</div>
			<Spacer y={24} />
		</>
	);
};
