import Link from 'next/link';

import { FaTwitter, FaYoutube, FaCoffee, FaGithub } from 'react-icons/fa';

import { FC } from 'react';

import { ProfileImage } from '@svg/index';

import styles from './Footer.module.scss';

const Footer: FC = () => {
	return (
		<footer className={styles.body}>
			<div className="container">
				<ProfileImage className={styles.profile + ' profile'} width={50} height={50} />
				<div className={styles.branding}>
					Guus van Meerveld <br />
					&#169; 2017 - {new Date().getFullYear()}
				</div>
				<div className={styles.socials}>
					<Link passHref href="https://twitter.com/GuusvanMeerveld" aria-label="twitter link">
						<a>
							<FaTwitter className={styles.socialLink} />
						</a>
					</Link>
					<Link
						passHref
						href="https://www.youtube.com/channel/UCYuqpoMay5SezCBrA_HKVWQ"
						aria-label="youtube link"
					>
						<a>
							<FaYoutube className={styles.socialLink} />
						</a>
					</Link>
					<Link passHref href="https://ko-fi.com/guusvanmeerveld" aria-label="kofi link">
						<a>
							<FaCoffee className={styles.socialLink} />
						</a>
					</Link>
					<Link passHref href="https://github.com/guusvanmeerveld" aria-label="github link">
						<a>
							<FaGithub className={styles.socialLink} />
						</a>
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
