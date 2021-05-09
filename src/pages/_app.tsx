import { ThemeProvider } from 'next-themes';

import 'milligram';
import '@styles/raleway.css';

import '@styles/sass/index.scss';

function App({ Component, pageProps }) {
	return (
		<ThemeProvider>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default App;
