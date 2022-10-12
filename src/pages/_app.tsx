import "@styles/globals.scss";

import SEO from "../next-seo.config";

import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";

import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
	<>
		<DefaultSeo {...SEO} />
		<ThemeProvider>
			<Component {...pageProps} />
		</ThemeProvider>
	</>
);

export default App;
