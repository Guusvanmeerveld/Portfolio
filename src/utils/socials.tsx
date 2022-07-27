import { BsTwitter, BsYoutube, BsMastodon, BsGithub } from "react-icons/bs";
import { SiKofi } from "react-icons/si";

const socials: { name: string; url: string; icon: JSX.Element }[] = [
	{
		name: "Twitter",
		url: `https://twitter.com/${import.meta.env.VITE_TWITTER_USERNAME}`,
		icon: <BsTwitter />
	},
	{
		name: "Youtube",
		url: `https://youtube.com/channel/${
			import.meta.env.VITE_YOUTUBE_CHANNEL_ID
		}`,
		icon: <BsYoutube />
	},
	{
		name: "Mastodon",
		url: import.meta.env.VITE_MASTODON_URL,
		icon: <BsMastodon />
	},
	{
		name: "Ko-fi",
		url: `https://ko-fi.com/${import.meta.env.VITE_KOFI_USERNAME}`,
		icon: <SiKofi />
	},
	{
		name: "Github",
		url: `https://github.com/${import.meta.env.VITE_GITHUB_USERNAME}`,
		icon: <BsGithub />
	}
];

export default socials;
