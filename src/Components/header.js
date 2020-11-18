import React from "react";
import "../App.css";
import { Link } from 'react-router-dom';
import Navbar from "./navbar";

function Header() {
  return (
    <div className="header">
      <img
        src={
          "https://www.sjsu.edu/communications/pics/ADJ_sjsu-gate-dschmitz-111417-3154_flat.jpg"
        }
        alt="card image"
        className="header_img"
      />
    </div>
  );
}

export default Header;
