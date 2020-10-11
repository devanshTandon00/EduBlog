import React from "react";
import Logo from "../images/Logo.svg";
import "../App.css";

function Card() {
  return (
      <div className="container">
        <div className="card">
            <div className="card__img">
            <img src={Logo} alt="website logo" className="logo" />
            </div>
            <h1>Title</h1>
            <h3>Author</h3>
        </div>

        <div className="card">
            <div className="card__img">
            <img src={Logo} alt="website logo" className="logo" />
            </div>
            <h1>Title</h1>
            <h3>Author</h3>
        </div>

        <div className="card">
            <div className="card__img">
            <img src={Logo} alt="website logo" className="logo" />
            </div>
            <h1>Title</h1>
            <h3>Author</h3>
        </div>

        <div className="card">
            <div className="card__img">
            <img src={Logo} alt="website logo" className="logo" />
            </div>
            <h1>Title</h1>
            <h3>Author</h3>
        </div>
      </div>
  );
}

export default Card;
