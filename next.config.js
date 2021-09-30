// @ts-check

const { i18n } = require('./next-i18next.config');

/**
 * @type {import('next').NextConfig}
 */
module.exports = {
	i18n,
	images: {
		domains: [process.env.CDN_ENDPOINT],
	},
	env: {
		CDN_ENDPOINT: process.env.CDN_ENDPOINT,
	},
};
