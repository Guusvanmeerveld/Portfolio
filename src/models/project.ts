export default interface Project {
	name: string;
	description: string;
	cover?: string;
	buttons: Button[];
}

interface Button {
	link: string;
	text: string;
}
