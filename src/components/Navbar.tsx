import { useTheme } from 'next-themes';
import { BiMoon } from 'react-icons/bi';
import { ImSun } from 'react-icons/im';

import { FC } from 'react';

import styles from './Navbar.module.scss';

const Navbar: FC = () => {
	const { theme, setTheme } = useTheme();
	const switchTheme = (): void => setTheme(theme == 'dark' ? 'light' : 'dark');

	return (
		<nav className={styles.bar}>
			<div className="container">
				<span className={styles.header}>Portfolio</span>
				<div className={styles.items}>
					<a href="/#projects">Projects</a>
					<a href="/contact">Contact</a>
					<a href="https://github.com/guusvanmeerveld/portfolio">Source code</a>

					<BiMoon onClick={switchTheme} className={styles.moon} />
					<ImSun onClick={switchTheme} className={styles.sun} />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
