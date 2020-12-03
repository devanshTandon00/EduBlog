import React from "react";
import "../App.css";
import { Link } from 'react-router-dom';
import Navbar from "./navbar";

function Header() {
  return (
    <div className="header">
      <img
        src={
          "https://images.pexels.com/photos/1036873/pexels-photo-1036873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        }
        alt="card image"
        className="header_img"
      />
    </div>
  );
}

export default Header;
