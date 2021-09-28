import { ThemeProvider } from 'next-themes';

import type { AppProps } from 'next/app';

import { appWithTranslation } from 'next-i18next';

import 'milligram';

import '@styles/montserrat.css';

import '@styles/globals.scss';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
	return (
		<ThemeProvider>
			<Component {...pageProps} />
		</ThemeProvider>
	);
};

export default appWithTranslation(App);
