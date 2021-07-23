import { NextPage } from 'next';

import Page from '@components/Page';
import Layout from '@components/Layout';
import PageBuilder from '@components/PageBuilder';

export { getStaticProps } from '../locales';

import styles from './thanks.module.scss';

const Thanks: NextPage = () => (
	<Page title="Thanks!" description="Thanks for submitting your contact form!">
		<Layout>
			<PageBuilder header="Thank you!" subtitle="Your submission is greatly appreciated!">
				<div className={styles.icon}>
					<span role="img" aria-label="heart emoji">
						❤️
					</span>
				</div>
			</PageBuilder>
		</Layout>
	</Page>
);

export default Thanks;
