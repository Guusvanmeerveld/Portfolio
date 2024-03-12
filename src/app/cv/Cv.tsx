"use client";

import { Card, CardBody } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
import { Listbox, ListboxItem } from "@nextui-org/listbox";
import { Progress } from "@nextui-org/progress";
import { Spacer } from "@nextui-org/spacer";
import { Component } from "@typings/component";
import humanizeDuration from "humanize-duration";
import NextImage from "next/image";

import { Fragment } from "react";

import CvProps, {
	Education as EducationProps,
	Experience as ExperienceProps,
	Skill as SkillProps
} from "@models/cv";

const Skill: Component<{ skill: SkillProps }> = ({ skill }) => {
	const duration = new Date().getTime() - skill.year.getTime();

	const durationInYears = humanizeDuration(duration, {
		units: ["y"],
		round: true
	});

	return (
		<div className="flex justify-between my-4">
			<Progress
				label={skill.name}
				aria-label={`Value for ${skill.name}`}
				valueLabel={durationInYears}
				showValueLabel
				value={skill.value * 100}
			/>
		</div>
	);
};

const Education: Component<{ education: EducationProps }> = ({ education }) => {
	return (
		<Card>
			<CardBody>
				<div className="flex justify-between">
					<div className="flex flex-col">
						<h1 className="text-md">{education.title}</h1>
						<h2 className="text-small text-default-500">
							{education.timeFrame}
						</h2>
					</div>
					<div className="flex flex-col text-right">
						<h1 className="text-md">{education.institution}</h1>
						<h2 className="text-small text-default-500">
							{education.location}
						</h2>
					</div>
				</div>

				<Spacer y={4} />

				<Listbox aria-label="Actions">
					{education.skills.map((skill) => (
						<ListboxItem key={skill.toLowerCase()}>{skill}</ListboxItem>
					))}
				</Listbox>
			</CardBody>
		</Card>
	);
};

const Experience: Component<{ experience: ExperienceProps }> = ({
	experience
}) => {
	return (
		<Card>
			<CardBody>
				<div className="flex justify-between">
					<div className="flex flex-col">
						<h1 className="text-md">
							{experience.role} <span className="text-default-500">at</span>{" "}
							{experience.title}
						</h1>
						<h2 className="text-small text-default-500">
							{experience.timeFrame}
						</h2>
					</div>
				</div>

				<Spacer y={4} />
			</CardBody>
		</Card>
	);
};

export const Cv: Component<{ data: CvProps }> = ({ data }) => {
	return (
		<div className="px-2 container mx-auto min-h-screen py-8">
			<div className="md:flex items-center">
				<div className="flex justify-center">
					<Image
						alt={`Professional picture of ${data.fullName}`}
						as={NextImage}
						className="mx-auto md:mx-0"
						width={200}
						height={200}
						src="/cv.jpg"
					/>
				</div>

				<Spacer x={8} />

				<div className="text-center md:text-left flex justify-between">
					<div className="w-full">
						<h1 className="text-4xl">{data.fullName}</h1>
						<Spacer y={4} />
						<h1 className="text-2xl text-default-600">{data.role}</h1>
					</div>
				</div>
			</div>

			<Spacer y={8} />

			<h2 className="text-xl">Professional profile</h2>
			<h3 className="text-md text-default-600">{data.description}</h3>

			<Spacer y={8} />

			<div className="lg:flex">
				<div className="w-full lg:w-1/3">
					<h1 className="text-2xl">Skills</h1>

					{data.skills
						.sort((a, b) => b.value - a.value)
						.map((skill) => (
							<Skill skill={skill} key={skill.name.toLowerCase()} />
						))}

					<Spacer y={8} />

					<h1 className="text-2xl">Programming Languages</h1>

					{data.programmingLanguages
						.sort((a, b) => b.value - a.value)
						.map((skill) => (
							<Skill skill={skill} key={skill.name.toLowerCase()} />
						))}

					<Spacer y={8} />
				</div>
				<Spacer x={8} />
				<div className="w-full lg:w-2/3">
					<h1 className="text-2xl">Experience</h1>

					{data.experience.map((experience) => {
						return (
							<Fragment key={experience.title.toLowerCase()}>
								<Spacer y={4} />
								<Experience experience={experience} />
							</Fragment>
						);
					})}

					<Spacer y={8} />

					<h1 className="text-2xl">Education</h1>

					{data.education.map((education) => {
						return (
							<Fragment key={education.title.toLowerCase()}>
								<Spacer y={4} />
								<Education education={education} />
							</Fragment>
						);
					})}
				</div>
			</div>
		</div>
	);
};
