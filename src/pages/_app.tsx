import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

import SEO from "../next-seo.config";

import "@styles/globals.scss";

const queryClient = new QueryClient({
	defaultOptions: { queries: { refetchOnWindowFocus: false } }
});

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
