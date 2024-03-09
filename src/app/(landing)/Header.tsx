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

export const Header: Component<{ header: HeaderProps }> = ({ header }) => {
	const socials = useMemo(
		() => [
			{
				link: `mailto:${header.contact.email}`,
				name: "Email address",
				icon: <FiMail />
			},
			{
				link: header.contact.git,
				name: "Github",
				icon: <FiGithub />
			},
			{
				link: header.contact.linkedin,
				name: "LinkedIn",
				icon: <FiLinkedin />
			}
		],
		[header.contact]
	);

	return (
		<div className="container mx-auto flex items-center min-h-screen">
			<div>
				{header.avatar !== undefined && (
					<Image
						src={header.avatar}
						width={300}
						alt={`A picture of ${header.fullName}`}
					/>
				)}

				<h1 className="text-4xl">{header.fullName}</h1>
				<Spacer y={4} />

				<h2 className="text-2xl">{header.description}</h2>
				<Spacer y={4} />

				{socials.map((social) => (
					<Link href={social.link} key={social.name.toLowerCase()}>
						<Tooltip showArrow content={social.name}>
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
