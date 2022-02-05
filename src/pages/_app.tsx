import { ThemeProvider } from 'next-themes';

import type { AppProps } from 'next/app';

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

export default App;
