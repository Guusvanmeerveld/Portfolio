"use client";

import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { Spacer } from "@nextui-org/react";
import { Tooltip } from "@nextui-org/tooltip";
import { Component } from "@typings/component";
import Link from "next/link";

import { useMemo } from "react";
import { FiGithub, FiMail, FiLinkedin } from "react-icons/fi";

import Owner from "@models/owner";

export const Header: Component<{ owner: Owner }> = ({ owner }) => {
	const socials = useMemo(
		() => [
			{
				link: `mailto:${owner.contact.email}`,
				name: "Email address",
				icon: <FiMail />
			},
			{
				link: owner.contact.git,
				name: "Github",
				icon: <FiGithub />
			},
			{
				link: owner.contact.linkedin,
				name: "LinkedIn",
				icon: <FiLinkedin />
			}
		],
		[owner.contact]
	);

	return (
		<div className="container min-h-screen">
			<div>
				{owner.avatar !== undefined && (
					<Image
						src={owner.avatar}
						width={300}
						alt={`A picture of ${owner.fullName}`}
					/>
				)}

				<h1 className="text-4xl">{owner.fullName}</h1>
				<Spacer y={4} />

				<h2 className="text-2xl">{owner.description}</h2>
				<Spacer y={4} />

				{socials.map((social) => (
					<Link href={social.link}>
						<Tooltip content={social.name}>
							<Button
								className="text-2xl mr-4"
								color="primary"
								isIconOnly
								aria-label={social.name}
							>
								{social.icon}
							</Button>
						</Tooltip>
					</Link>
				))}
			</div>
		</div>
	);
};
