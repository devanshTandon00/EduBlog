import React, { Component } from "react";
import "../App.css";
import { Link } from 'react-router-dom';

export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <Link to={"blog/" + this.props.postName} style={{ color: 'inherit', textDecoration: 'inherit' }}>
          <div className="card__img">
            <img src={this.props.image} alt="website logo" className="card__img" />
          </div>  
          <h2>{this.props.postName}</h2>
          <h3>By {this.props.author}</h3>
          <p>{this.props.date}</p>
        </Link>
      </div>
    );
  }
}
