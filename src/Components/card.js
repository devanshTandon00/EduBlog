import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";

/**
 * Created a card component for the blog homepage displaying blog details
 */
export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <Link
          to={{
            pathname: "blog/" + this.props.postName,
            aboutProps: { postName: this.props.postName },
          }}
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <div className="card__img">
            <img
              src={this.props.image}
              alt="card image"
              className="card__img"
            />
          </div>
          <h2>{this.props.postName}</h2>
          <h3>By {this.props.author}</h3>
          <p>{this.props.date}</p>
        </Link>
      </div>
    );
  }
}
