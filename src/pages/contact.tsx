import { NextPage } from 'next';

import Page from '@components/Page';
import Layout from '@components/Layout';
import ContactForm from '@components/Contact';

const Contact: NextPage = () => {
	return (
		<Page description="Contact me" title="Contact">
			<Layout>
				<ContactForm />
			</Layout>
		</Page>
	);
};

export default Contact;
