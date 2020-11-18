import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Logo from '../images/Logo.svg';

export default function Navbar() {
  return (
    <header className="logo-header">
      <div className="navbar">
        <Link className="logo" to="/">
          <img src={Logo} alt="website logo" className="logo" />
        </Link>

        <nav className="navRight">
          <li>About</li>
          <li>Demo</li>
          <li>Roadmap</li>
          <li>
            <Link className="navbarBlog" to="/">
              Blog
            </Link>
          </li>
          <li>
            <Link className="navbarBlog" to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link className="navbarBlog" to="/dashboard">
              Dash
            </Link>
          </li>
        </nav>
      </div>
    </header>
  );
}
