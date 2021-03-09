const Landing = () => (
  <div className="landing">
    <div className="container">
      <span className="profile">
        <img src="/profile.png" width="100%" height="100%" alt="" />
      </span>

      <span className="title">Guus van Meerveld</span>
      <span className="subtitle">
        TypeScript / Dart developer, <br />
        currently working on Argo.
      </span>

      <a href="#projects" className="button d-block m-auto">
        Check out my projects
      </a>
    </div>
  </div>
);

export default Landing;
