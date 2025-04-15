"use client";

import { HeroUIProvider } from "@heroui/react";
import { Component } from "@typings/component";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export const Providers: Component = ({ children }) => {
	return (
		<HeroUIProvider>
			<NextThemesProvider attribute="class" defaultTheme="dark">
				{children}
			</NextThemesProvider>
		</HeroUIProvider>
	);
};
