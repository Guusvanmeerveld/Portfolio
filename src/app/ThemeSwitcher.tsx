"use client";

import { Switch } from "@heroui/react";
import { Component } from "@typings/component";
import { useTheme } from "next-themes";

import { FiMoon, FiSun } from "react-icons/fi";

export const ThemeSwitcher: Component = () => {
	const { theme, setTheme } = useTheme();

	return (
		<Switch
			defaultSelected
			size="lg"
			color="primary"
			onValueChange={(value) => {
				value ? setTheme("dark") : setTheme("light");
			}}
			startContent={<FiSun />}
			endContent={<FiMoon />}
		/>
	);
};
