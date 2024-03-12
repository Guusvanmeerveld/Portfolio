"use client";

import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { Spacer } from "@nextui-org/spacer";
import { Tooltip } from "@nextui-org/tooltip";
import { Component } from "@typings/component";
import NextLink from "next/link";

import { useMemo } from "react";
import { FiGithub, FiMail, FiLinkedin, FiFileText } from "react-icons/fi";

import HeaderProps from "@models/header";

interface Social {
	link: string;
	name: string;
	icon: React.ReactElement;
	isExternal?: boolean;
}

export const Header: Component<{ data: HeaderProps; avatar: string }> = ({
	data,
	avatar
}) => {
	const socials = useMemo<Social[]>(
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
			},
			{
				link: "/cv",
				name: "Cv",
				icon: <FiFileText />,
				isExternal: false
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
						<Link
							isExternal={social.isExternal ?? true}
							as={NextLink}
							href={social.link}
							key={social.name.toLowerCase()}
						>
							<Tooltip showArrow content={social.name}>
								<Button
									className="text-2xl mr-4"
									color="primary"
									variant="shadow"
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
		</div>
	);
};
