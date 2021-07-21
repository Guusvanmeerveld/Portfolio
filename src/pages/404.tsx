import { FC } from 'react';

import Page from '@components/Page';
import Layout from '@components/Layout';
import PageBuilder from '@components/PageBuilder';

const NotFound: FC = () => (
	<Page title="Page not found" description="This page either doesn't exist or has been deleted">
		<Layout>
			<PageBuilder
				header="Not found"
				subtitle="This page either doesn't exist or has been deleted"
			/>
		</Layout>
	</Page>
);

export default NotFound;
