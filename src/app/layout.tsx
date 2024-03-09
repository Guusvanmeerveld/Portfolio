import { Metadata } from "next";

import { Footer } from "./Footer";
import { Providers } from "./providers";

import "@styles/global.scss";

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}

export const metadata: Metadata = {
	title: {
		default: "Portfolio",
		template: "%s | Portfolio"
	},
	description: "Guus van Meerveld's portfolio",
	applicationName: "Portfolio",
	manifest: "/manifest.json"
};
