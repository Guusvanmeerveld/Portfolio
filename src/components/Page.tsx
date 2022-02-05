import Head from 'next/head';

import { FC } from 'react';

const Page: FC<{
	title: string;
	description: string;
	children: JSX.Element[] | JSX.Element;
}> = ({ title, description, children }) => (
	<>
		<Head>
			<meta charSet="UTF-8" />
			<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>Guus van Meerveld | {title}</title>
			<meta name="description" content={description} />
			<meta name="keywords" content="guus van meerveld argo magister tempo discord" />
			<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
			<link rel="apple-touch-icon" sizes="192x192" href="/favicon.ico" />
		</Head>
		{children}
	</>
);

export default Page;
