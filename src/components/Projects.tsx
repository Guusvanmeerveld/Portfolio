const Projects = () => (
  <div className="projects">
    <div className="container">
      <div className="header" id="projects">
        Projects
      </div>

      <div className="project">
        <div className="content">
          <div className="info">
            <div className="title">Argo</div>
            Argo is a new app for Magister 6, made with <b>Dart and Flutter</b>. It will soon be available on the Google
            Play store and (maybe) even the App store! For more information, click either of the buttons below.
            <br />
            <br />
            <a href="https://argo-magister.net" className="button">
              Website
            </a>
            <a href="https://github.com/argo-client/app" className="button">
              Github
            </a>
          </div>
          <div className="cover">
            <img src="/img/argo.png" width="100%" height="100%" alt="" />
          </div>
        </div>
      </div>

      <div className="project">
        <div className="content">
          <div className="cover">
            <img src="/img/tempo.png" width="100%" height="100%" alt="" />
          </div>
          <div className="info right">
            <div className="title">Tempo</div>
            Tempo is a "simple" Discord bot which can be used to play YouTube, SoundCloud and even Spotify songs. It's
            made in pure <b>TypeScript</b> and has plentiful settings. <br />
            <br />
            <a href="https://tempo.g-vm.nl" className="button">
              Website
            </a>
            <a href="https://tempo.g-vm.nl/invite" className="button">
              Invite
            </a>
          </div>
        </div>
      </div>

      <div className="project">
        <div className="content">
          <div className="info">
            <div className="title">Keyzo</div>
            Keyzo is an electron-based program written in <b>JavaScript and CSS</b> but I am planning on moving to
            <b> TypeScript</b>. It's main use is to bring every keybind you will every need into a single program, with
            a simple and neat interface. <br />
            <br />
            <a href="https://keyzo.net" className="button">
              Website
            </a>
            <a href="https://github.com/Guusvanmeerveld/Keyzo" className="button">
              Github
            </a>
          </div>
          <div className="cover"></div>
        </div>
      </div>

      <div className="project">
        <div className="content">
          <div className="cover">
            <img src="/img/autologin.png" width="100%" height="100%" alt="" />
          </div>
          <div className="info right">
            <div className="title">Magister Auto-Login</div>
            Magister Auto-Login is a chrome extension that automatically logs into Magister 6 for you. <br />
            <br />
            <a
              className="button"
              href="https://chrome.google.com/webstore/detail/magister-auto-login/cekhhgcjpkahghpgeafhmkkjhidodplk?hl=nl"
            >
              Add to Chrome
            </a>
            <a className="button" href="https://github.com/Guusvanmeerveld/Magister-Auto-Login">
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
