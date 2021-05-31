import Page from 'src/components/Page';
import Layout from 'src/components/Layout';
import { NextPage } from 'next';

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
					<a href="/" className="link button">
						Go back
					</a>
				</div>
			</div>
		</Layout>
	</Page>
);

export default Thanks;
