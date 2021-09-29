import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import Link from 'next/link';

import React, { ChangeEvent, FC } from 'react';

import { BiMoon } from 'react-icons/bi';
import { ImSun } from 'react-icons/im';

import styles from './Navbar.module.scss';
import { useTranslation } from 'next-i18next';

const LanguageSelector: FC = () => {
	const router = useRouter();

	const locale = router.locale;

	const updateLocale = (e: ChangeEvent<HTMLSelectElement>) => {
		router.push('', '', { locale: e.target.value });
	};

	return (
		<select className={styles.select} onChange={updateLocale} defaultValue={locale}>
			{router.locales.map((locale) => (
				<option key={locale} value={locale}>
					{locale.toUpperCase()}
				</option>
			))}
		</select>
	);
};

const Navbar: FC = () => {
	const { t } = useTranslation('nav');

	const { theme, setTheme } = useTheme();
	const switchTheme = (): void => setTheme(theme == 'dark' ? 'light' : 'dark');

	return (
		<nav className={styles.bar}>
			<div className="container">
				<div className={styles.content}>
					<div className={styles.header}>{t('title')}</div>
					<div className={styles.items}>
						<Link href="/#projects">
							<a>{t('projects')}</a>
						</Link>
						{/* <Link href="/contact">
							<a>{t('contact')}</a>
						</Link> */}
						<Link href="https://github.com/guusvanmeerveld/portfolio">
							<a>{t('github')}</a>
						</Link>

						<BiMoon onClick={switchTheme} className={styles.moon} />
						<ImSun onClick={switchTheme} className={styles.sun} />

						<LanguageSelector />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
