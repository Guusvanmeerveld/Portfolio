"use client";

import { NextUIProvider } from "@nextui-org/react";
import { Component } from "@typings/component";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export const Providers: Component = ({ children }) => {
	return (
		<NextUIProvider>
			<NextThemesProvider attribute="class" defaultTheme="dark">
				{children}
			</NextThemesProvider>
		</NextUIProvider>
	);
};
