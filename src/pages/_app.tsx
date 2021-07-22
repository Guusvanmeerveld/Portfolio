import { ThemeProvider } from 'next-themes';

import { I18nProvider } from 'next-localization';
import { useRouter } from 'next/router';

import type { AppProps } from 'next/app';

import 'milligram';

import '@styles/raleway.css';
import '@styles/roboto.css';

import '@styles/globals.scss';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
	const router = useRouter();
	const { lngDict, ...rest } = pageProps;

	return (
		<I18nProvider lngDict={lngDict} locale={router.locale}>
			<ThemeProvider>
				<Component {...rest} />
			</ThemeProvider>
		</I18nProvider>
	);
};

export default App;
