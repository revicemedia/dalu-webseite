import "./Navbar.css";
import DaLuLogo from "../../images/DaLu-Logo.svg";
import LoginIcon from "../../images/login.svg";
import { useState } from "react";

function Navbar() {
  const [scroll, setScroll] = useState(false);

  window.onscroll = function () {
    myFunction();
  };

  function myFunction() {
    if (window.pageYOffset > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }
  return (
    <div className={scroll ? "Navbar shadow" : "Navbar"} id="navbar">
      <div className={scroll ? "Navbar-Inner__sticky" : "Navbar-Inner"}>
        <img src={DaLuLogo} alt="DaLu Logo" className="Dalu-Logo" />
        <nav className="NavList">
          <a href="/">Start</a>
          <a href="#preise">Preise</a>
          <a href="#top">Start</a>
          <a href="#lol">Blog</a>
        </nav>
        <div className="Navbar-Login">
          <a href="/" className="Login-Button">
            Sign In <img src={LoginIcon} className="Login-Icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
