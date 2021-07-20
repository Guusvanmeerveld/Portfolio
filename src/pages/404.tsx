import Link from 'next/link';

import { FC } from 'react';

import Page from '@components/Page';
import Layout from '@components/Layout';

const NotFound: FC = () => (
	<Page title="Page not found" description="This page either doesn't exist or has been deleted">
		<Layout>
			<div className="page">
				<div>
					<div className="header">Not found</div>
					<div className="subtitle">This page either doesn&apos;t exist or has been deleted</div>
					<Link href="/">
						<a className="link button">Go back</a>
					</Link>
				</div>
			</div>
		</Layout>
	</Page>
);

export default NotFound;
