import { FaTwitter, FaYoutube, FaCoffee, FaGithub } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <img src="/img/profile.png" width="100%" height="100%" alt="" className="profile" />
        <div className="branding">
          Guus van Meerveld <br />
          &#169; {year}
        </div>
        <div className="socials">
          <a href="https://twitter.com/GuusvanMeerveld">
            <FaTwitter className="img" color="#666" />
          </a>
          <a href="https://www.youtube.com/channel/UCYuqpoMay5SezCBrA_HKVWQ">
            <FaYoutube className="img" color="#666" />
          </a>
          <a href="https://ko-fi.com/guusvanmeerveld">
            <FaCoffee className="img" color="#666" />
          </a>
          <a href="https://github.com/guusvanmeerveld">
            <FaGithub className="img" color="#666" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
