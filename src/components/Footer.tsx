import { FaTwitter, FaYoutube, FaCoffee, FaGithub } from 'react-icons/fa';

import { FC } from 'react';

import styles from './Footer.module.scss';

const Footer: FC = () => {
	return (
		<footer className={styles.body}>
			<div className="container">
				<img
					src="/assets/images/profile.svg"
					width="100%"
					height="100%"
					alt=""
					className={styles.profile + ' profile'}
				/>
				<div className={styles.branding}>
					Guus van Meerveld <br />
					&#169; 2021
				</div>
				<div className={styles.socials}>
					<a href="https://twitter.com/GuusvanMeerveld" aria-label="twitter link">
						<FaTwitter className={styles.socialLink} />
					</a>
					<a
						href="https://www.youtube.com/channel/UCYuqpoMay5SezCBrA_HKVWQ"
						aria-label="youtube link"
					>
						<FaYoutube className={styles.socialLink} />
					</a>
					<a href="https://ko-fi.com/guusvanmeerveld" aria-label="kofi link">
						<FaCoffee className={styles.socialLink} />
					</a>
					<a href="https://github.com/guusvanmeerveld" aria-label="github link">
						<FaGithub className={styles.socialLink} />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
