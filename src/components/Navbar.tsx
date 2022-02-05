import { useTheme } from 'next-themes';
import Link from 'next/link';

import { useTranslation } from 'next-i18next';

import React, { FC } from 'react';

import { BiMoon } from 'react-icons/bi';
import { ImSun } from 'react-icons/im';

import styles from './Navbar.module.scss';

import { ProfileImage } from '@svg/index';

const Navbar: FC = () => {
	const { theme, setTheme } = useTheme();
	const switchTheme = (): void => setTheme(theme == 'dark' ? 'light' : 'dark');

	return (
		<nav className={styles.bar}>
			<div className="container">
				<div className={styles.content}>
					<div className={styles.header}>
						<Link href="/">
							<a>
								<ProfileImage className="profile" width={32} height={32} />
							</a>
						</Link>
					</div>
					<div className={styles.items}>
						<Link href="/#projects">
							<a>Projects</a>
						</Link>
						<Link href="/blog">
							<a>Contact</a>
						</Link>
						<Link href="https://github.com/guusvanmeerveld/portfolio">
							<a>Github</a>
						</Link>

						<BiMoon onClick={switchTheme} className={styles.moon} />
						<ImSun onClick={switchTheme} className={styles.sun} />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
