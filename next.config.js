// @ts-check

/**
 * @type {import('next').NextConfig}
 */
module.exports = {
	images: {
		loader: 'imgix',
		path: process.env.IMGIX_PATH || 'https://guusvanmeerveld.imgix.net',
	},
	env: {
		CDN_ENDPOINT: process.env.CDN_ENDPOINT,
	},
	webpack: (config) => {
		config.module.rules.push({ test: /\.svg$/, use: ['@svgr/webpack'] });
		return config;
	},
};
