import { useTheme } from 'next-themes';
import { BiMoon } from 'react-icons/bi';
import { ImSun } from 'react-icons/im';

import { FC } from 'react';

const Navbar: FC = () => {
	const { theme, setTheme } = useTheme();
	const switchTheme = (): void => setTheme(theme == 'dark' ? 'light' : 'dark');

	return (
		<nav className="navigation">
			<div className="container">
				<span className="header">Portfolio</span>
				<div className="items">
					<a href="/#projects">Projects</a>
					<a href="/contact">Contact</a>
					<a href="https://github.com/guusvanmeerveld/portfolio">Source code</a>

					<BiMoon onClick={switchTheme} className="dark-switch moon" />
					<ImSun onClick={switchTheme} className="dark-switch sun" />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
