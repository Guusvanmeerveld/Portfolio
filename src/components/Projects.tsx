import { NextPage } from 'next';

import Project from '@components/Project';

const Projects: NextPage = () => (
	<div className="projects">
		<div className="container">
			<div className="header" id="projects">
				Projects
			</div>
			<Project
				name="Argo"
				description="Argo is a new app for Magister 6, made with Dart and Flutter. It will soon be
					available on the Google Play store and (maybe) even the App store! For more information,
					click either of the buttons below."
				buttons={[
					{ link: 'https://argo-magister.net', text: 'Website' },
					{ link: 'https://github.com/argo-client/app', text: 'Github' },
				]}
				cover="/img/argo.png"
			/>

			<Project
				name="Tempo"
				description="Tempo is a 'simple' Discord bot which can be used to play YouTube, SoundCloud and even
						Spotify songs. It's made in pure TypeScript and has plentiful settings."
				right
				buttons={[
					{ link: 'https://tempo.g-vm.nl', text: 'Website' },
					{ link: 'https://tempo.g-vm.nl/invite', text: 'Invite' },
				]}
				cover="/img/tempo.png"
			/>

			<Project
				name="Keyzo"
				description="Keyzo is an electron-based program written in JavaScript and CSS but I am
						planning on moving to
						TypeScript. It's main use is to bring every keybind you will every need into a
						single program, with a simple and neat interface."
				buttons={[
					{
						link: 'https://keyzo.net',
						text: 'Website',
					},
					{
						link: 'https://github.com/Guusvanmeerveld/Keyzo',
						text: 'Github',
					},
				]}
			/>

			<Project
				name="Magister Auto-Login"
				description="Magister Auto-Login is a chrome extension that automatically logs into Magister 6 for
						you."
				right
				buttons={[
					{
						link: 'https://chrome.google.com/webstore/detail/magister-auto-login/cekhhgcjpkahghpgeafhmkkjhidodplk?hl=nl',
						text: 'Add to Chrome',
					},
					{
						link: 'https://github.com/Guusvanmeerveld/Magister-Auto-Login',
						text: 'Github',
					},
				]}
				cover="/img/autologin.png"
			/>
		</div>
	</div>
);

export default Projects;
