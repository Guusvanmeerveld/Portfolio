"use client";

import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { Spacer } from "@nextui-org/react";
import { Tooltip } from "@nextui-org/tooltip";
import { Component } from "@typings/component";
import Link from "next/link";

import { useMemo } from "react";
import { FiGithub, FiMail, FiLinkedin } from "react-icons/fi";

import HeaderProps from "@models/header";

export const Header: Component<{ data: HeaderProps; avatar: string }> = ({
	data,
	avatar
}) => {
	const socials = useMemo(
		() => [
			{
				link: `mailto:${data.contact.email}`,
				name: "Email address",
				icon: <FiMail />
			},
			{
				link: data.contact.git,
				name: "Github",
				icon: <FiGithub />
			},
			{
				link: data.contact.linkedin,
				name: "LinkedIn",
				icon: <FiLinkedin />
			}
		],
		[data.contact]
	);

	return (
		<div className="container mx-auto flex items-center min-h-screen">
			<div className="flex items-center">
				<Image
					isBlurred
					src={avatar}
					width={300}
					alt={`A picture of ${data.fullName}`}
				/>

				<Spacer x={8} />

				<div>
					<h1 className="text-4xl">{data.fullName}</h1>
					<Spacer y={4} />

					<h2 className="text-2xl">{data.description}</h2>
					<Spacer y={4} />

					{socials.map((social) => (
						<Tooltip
							key={social.name.toLowerCase()}
							showArrow
							content={social.name}
						>
							<Button
								href={social.link}
								as={Link}
								className="text-2xl mr-4"
								color="primary"
								isIconOnly
								aria-label={social.name}
							>
								{social.icon}
							</Button>
						</Tooltip>
					))}
				</div>
			</div>
		</div>
	);
};
