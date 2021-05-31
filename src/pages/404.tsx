import Page from 'src/components/Page';
import Layout from 'src/components/Layout';

import { FC } from 'react';

const NotFound: FC = () => (
	<Page title="Page not found" description="This page either doesn't exist or has been deleted">
		<Layout>
			<div className="page">
				<div>
					<div className="header">Not found</div>
					<div className="subtitle">This page either doesn&apos;t exist or has been deleted</div>
					<a href="/" className="link button">
						Go back
					</a>
				</div>
			</div>
		</Layout>
	</Page>
);

export default NotFound;
