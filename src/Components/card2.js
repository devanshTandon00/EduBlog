import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { db } from "../config/firebase";

/**
 * Creating a card instance for the admin dashboard page with and edit and delete buttons
 * Fetching data from the database to populate the card fields
 */
export default class Card2 extends Component {
  clickHandler(e) {
    db.collection("posts")
      .where("postName", "==", this.props.postName)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          console.log(doc.id, "=>", doc.data());
          db.collection("posts")
            .doc(doc.id)
            .delete()
            .then(() => {
              alert("Post successfully deleted!");
              window.location.reload(false);
            })
            .catch((error) => {
              alert("Could not delete post!");
            });
        });
      });
  }

  render() {
    return (
      <div className="card2">
        <button
          onClick={(e) => this.clickHandler(e)}
          className="button"
          style={{ float: "right", marginRight: 20, marginTop: 20 }}
        >
          Delete
        </button>
        <Link
          to={{
            pathname: "editPost/" + this.props.postName,
            aboutProps: { postName: this.props.postName },
          }}
          style={{ float: "right", paddingRight: 10, marginTop: 20 }}
        >
          <button className="button">Edit</button>
        </Link>
        <h2>{this.props.postName}</h2>
        <h3>By {this.props.author}</h3>
        <p>{this.props.date}</p>
      </div>
    );
  }
}
