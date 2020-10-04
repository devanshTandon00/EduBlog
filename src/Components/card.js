import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import "../App.css";

function Card() {
  return (
      <div class="container">
        <div class="card">
            <div class="card__img">
            <img src={Logo} alt="website logo" className="logo" />
            </div>
            <h1>Title</h1>
            <h3>Author</h3>
        </div>

        <div class="card">
            <div class="card__img">
            <img src={Logo} alt="website logo" className="logo" />
            </div>
            <h1>Title</h1>
            <h3>Author</h3>
        </div>

        <div class="card">
            <div class="card__img">
            <img src={Logo} alt="website logo" className="logo" />
            </div>
            <h1>Title</h1>
            <h3>Author</h3>
        </div>

        <div class="card">
            <div class="card__img">
            <img src={Logo} alt="website logo" className="logo" />
            </div>
            <h1>Title</h1>
            <h3>Author</h3>
        </div>


      </div>
  );
}

export default Card;
