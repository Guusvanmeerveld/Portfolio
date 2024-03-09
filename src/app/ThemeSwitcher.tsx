"use client";

import { Switch } from "@nextui-org/react";
import { Component } from "@typings/component";
import { useTheme } from "next-themes";

import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export const ThemeSwitcher: Component = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

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
