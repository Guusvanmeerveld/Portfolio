import { FC } from "react";

import Footer from "@components/Footer";
import ThemeChanger from "@components/ThemeChanger";

const Layout: FC = ({ children }) => {
	return (
		<>
			<ThemeChanger />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
