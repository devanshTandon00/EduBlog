import React from "react";
import "../App.css";
import { Link } from 'react-router-dom';
import Navbar from "./navbar";

function Header() {

  const addPost = () => {
    
  }

  const deletePost = () => {

  }

  return (
    <div className="header">
      <Link to = {"addPost/"}> 
        <button> Add Post </button>
      </Link>
    </div>
  );
}

export default Header;
