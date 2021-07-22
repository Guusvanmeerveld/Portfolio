import { useI18n } from 'next-localization';
import { useTheme } from 'next-themes';
import { GetStaticProps } from 'next';
import Link from 'next/link';

import { BiMoon } from 'react-icons/bi';
import { ImSun } from 'react-icons/im';

import { FC } from 'react';

import styles from './Navbar.module.scss';

const Navbar: FC = () => {
	const { t } = useI18n();

	const { theme, setTheme } = useTheme();
	const switchTheme = (): void => setTheme(theme == 'dark' ? 'light' : 'dark');

	return (
		<nav className={styles.bar}>
			<div className="container">
				<div className={styles.content}>
					<div className={styles.header}>Portfolio</div>
					<div className={styles.items}>
						<Link href="/#projects">
							<a>{t('nav.projects')}</a>
						</Link>
						<Link href="/contact">
							<a>{t('nav.contact')}</a>
						</Link>
						<Link href="https://github.com/guusvanmeerveld/portfolio">
							<a>{t('nav.github')}</a>
						</Link>

						<BiMoon onClick={switchTheme} className={styles.moon} />
						<ImSun onClick={switchTheme} className={styles.sun} />

						<select className={styles.select}>
							<option value="nl">NL</option>
							<option value="en">EN</option>
						</select>
					</div>
				</div>
			</div>
		</nav>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	const { default: lngDict = {} } = await import(`../locales/${locale}.json`);

	return {
		props: { lngDict },
	};
};

export default Navbar;
