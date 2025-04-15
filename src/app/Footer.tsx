"use client";

import { Divider } from "@heroui/divider";
import { Link } from "@heroui/link";
import { Component } from "@typings/component";

import { ThemeSwitcher } from "./ThemeSwitcher";

import FooterProps from "@models/footer";

export const Footer: Component<{ data: FooterProps }> = ({ data }) => {
	return (
		<div className="container mx-auto grid grid-flow-col justify-stretch my-4">
			<div className="mx-4">
				<h1 className="text-xl">
					Created with{" "}
					<span role="img" aria-label="Red Heart">
						&#x2764;&#xfe0f;
					</span>{" "}
					by Guus van Meerveld
				</h1>

				<Divider className="my-4" />

				<ThemeSwitcher />
			</div>

			{data.columns.map((column) => (
				<div className="mx-4" key={column.title.toLowerCase()}>
					<h1 className="text-xl">{column.title}</h1>

					<Divider className="mt-4" />

					{column.links.map((link) => (
						<div className="my-4" key={link.url}>
							<Link className="text-default-500" href={link.url}>
								{link.text}
							</Link>
						</div>
					))}
				</div>
			))}
		</div>
	);
};
