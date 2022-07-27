import { FunctionalComponent } from "preact";

import Footer from "@components/Footer";

const Layout: FunctionalComponent = ({ children }) => {
	return (
		<>
			{children}
			<Footer />
		</>
	);
};

export default Layout;
