import { ThemeProvider } from 'next-themes';

import type { AppProps } from 'next/app';

import 'milligram';
import '@styles/raleway.css';
import '@styles/roboto.css';

import '@styles/globals.scss';

function App({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<ThemeProvider>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default App;
