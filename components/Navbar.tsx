import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const switchTheme = () => setTheme(theme == "dark" ? "light" : "dark");

  return (
    <nav className="navigation">
      <div className="container">
        <span className="header">Portfolio</span>
        <div className="items">
          <a href="/#projects">Projects</a>
          <a href="/#contact">Contact</a>
          <a href="https://github.com/guusvanmeerveld/portfolio">Source code</a>

          <FaMoon onClick={switchTheme} className="dark-switch moon" />
          <FaSun onClick={switchTheme} className="dark-switch sun" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
