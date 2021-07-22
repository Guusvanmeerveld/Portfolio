import { NextPage } from 'next';
import { useTheme } from 'next-themes';

import ReCAPTCHA from 'react-google-recaptcha';

import Page from '@components/Page';
import Layout from '@components/Layout';

import styles from './contact.module.scss';

const formURL = 'https://forms.guusvanmeerveld.dev/portfolio';

const Contact: NextPage = () => {
	const { theme } = useTheme();

	return (
		<Page description="Contact me" title="Contact">
			<Layout>
				<div className={styles.contact}>
					<div className="container">
						<div className={styles.header} id="contact">
							Contact
						</div>
						<form
							encType="application/x-www-form-urlencoded"
							action={formURL}
							className="content"
							method="POST"
							name="contact"
						>
							<label htmlFor="email">Email</label>
							<input
								className={styles.input}
								name="email"
								type="email"
								required
								placeholder="Your email address"
								id="email"
							/>

							<label htmlFor="type">Message type</label>
							<select className={styles.input} name="type[]" id="type">
								<option value="bug">Bug</option>
								<option value="question">Question</option>
								<option value="suggestion">Suggestion</option>
								<option value="other">Other</option>
							</select>

							<label htmlFor="message">Message</label>
							<textarea
								className={styles.textarea}
								required
								name="message"
								placeholder="Your message"
							></textarea>

							<ReCAPTCHA
								theme={theme as 'light' | 'dark'}
								sitekey={process.env.NEXT_PUBLIC_CAPTCHA_KEY}
							/>

							<button className={styles.submit + ' button'} type="submit">
								Send
							</button>
						</form>
					</div>
				</div>
			</Layout>
		</Page>
	);
};

export default Contact;
