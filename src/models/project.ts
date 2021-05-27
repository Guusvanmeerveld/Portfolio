export default interface Project {
	name: string;
	description: string;
	cover?: string;
	right?: boolean;
	buttons: Button[];
}

interface Button {
	link: string;
	text: string;
}
