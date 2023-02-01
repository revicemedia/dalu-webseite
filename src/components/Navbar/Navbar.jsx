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
          <a href="#Services">Leistungen</a>
          <a href="#Preise">Preise</a>
          <a href="#Blog">Blog</a>
        </nav>
        <div className="Navbar-Login">
          <a
            href="https://dashboard.dalu-services.com/"
            className="Login-Button"
          >
            Sign In <img src={LoginIcon} className="Login-Icon" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
