import Projects from '@components/Projects';
import Landing from '@components/Landing';
import Contact from '@components/Contact';
import Layout from '@components/Layout';
import Page from '@components/Page';

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
