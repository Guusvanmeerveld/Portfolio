const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <img src="/profile.png" width="100%" height="100%" alt="" className="profile" />
        <div className="branding">
          Guus van Meerveld <br />
          &#169; {year}
        </div>
        <div className="socials">
          <a href="https://twitter.com/GuusvanMeerveld">
            <img src="/svg/twitter.svg" alt="" />
          </a>
          <a href="https://www.youtube.com/channel/UCYuqpoMay5SezCBrA_HKVWQ">
            <img src="/svg/youtube.svg" alt="" />
          </a>
          <a href="https://ko-fi.com/guusvanmeerveld">
            <img src="/svg/coffee.svg" alt="" />
          </a>
          <a href="https://github.com/guusvanmeerveld">
            <img src="/svg/github.svg" alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
