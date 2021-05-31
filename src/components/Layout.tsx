import { FC } from 'react';

import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

const Layout: FC<{ children: JSX.Element | JSX.Element[] }> = ({ children }) => (
	<>
		<Navbar />
		{children}
		<Footer />
	</>
);

export default Layout;
