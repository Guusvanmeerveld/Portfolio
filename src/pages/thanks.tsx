import { NextPage } from 'next';
import Link from 'next/link';

import Page from '@components/Page';
import Layout from '@components/Layout';

const Thanks: NextPage = () => (
	<Page title="Thanks!" description="Thanks for submitting your contact form!">
		<Layout>
			<div className="page">
				<div>
					<div className="icon">
						<span role="img" aria-label="heart emoji">
							❤️
						</span>
					</div>
					<div className="header">Thank you!</div>
					<div className="subtitle">Your submission is greatly appreciated!</div>
					<Link href="/">
						<a className="link button">Go back</a>
					</Link>
				</div>
			</div>
		</Layout>
	</Page>
);

export default Thanks;
