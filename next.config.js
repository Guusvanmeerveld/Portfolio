// @ts-check

const { i18n } = require('./next-i18next.config');

/**
 * @type {import('next').NextConfig}
 */
module.exports = {
	i18n,
	images: {
		domains: [process.env.API_ENDPOINT],
	},
	env: {
		API_ENDPOINT: process.env.API_ENDPOINT,
	},
};
