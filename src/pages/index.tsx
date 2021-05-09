import Page from '@components/Page';
import Landing from '@components/Landing';
import Projects from '@components/Projects';
import Contact from '@components/Contact';
import Layout from '@components/Layout';

const Home = () => (
	<Page description="A simple portfolio website to display my projects." title="Projects">
		<Layout>
			<Landing />
			<Projects />
			<Contact />
		</Layout>
	</Page>
);

export default Home;
