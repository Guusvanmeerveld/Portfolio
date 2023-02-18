import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "@styles/globals.scss";

import SEO from "../next-seo.config";

import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";

import type { AppProps } from "next/app";

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
	<>
		<DefaultSeo {...SEO} />
		<ThemeProvider>
			<QueryClientProvider client={queryClient}>
				<Component {...pageProps} />
			</QueryClientProvider>
		</ThemeProvider>
	</>
);

export default App;
