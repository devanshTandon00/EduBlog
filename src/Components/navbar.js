import React from "react";
import { Link } from "react-router-dom";
// import Logo from "../images/logo.png";
import "../App.css";
import Logo from "../images/Logo.svg";

function Navbar() {
  return (
    <div className="navbar">
      <div>
        <header className="logo-header">
          <li>
            <Link className="logo" to="/">
              <img src={Logo} alt="website logo" className="logo" />
            </Link>
          </li>
        </header>

        <nav className="navRight">
          <li>About</li>
          <li>Demo</li>
          <li>Roadmap</li>
          <li>
            <Link className="navbarBlog" to="/blog">
              Blog
            </Link>
          </li>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
