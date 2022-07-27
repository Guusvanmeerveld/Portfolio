/// <reference types="vite/client" />
interface ImportMetaEnv {
	readonly VITE_GITHUB_USERNAME: string;
	readonly VITE_TWITTER_USERNAME: string;
	readonly VITE_YOUTUBE_CHANNEL_ID: string;
	readonly VITE_MASTODON_URL: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
