import React, { Component } from "react";
import Navbar from "../Components/navbar";
import Card2 from "../Components/card2";
import { Redirect, Link } from "react-router-dom";
import firebase, { db } from "../config/firebase";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      posts: null,
      signOut: false,
      user: null,
    };

    this.handleSignOut = this.handleSignOut.bind(this);
  }

  currentUser = firebase.auth().currentUser;

  componentDidMount() {
    console.log("mounted");
    db.collection("posts")
      .get()
      .then((snapshot) => {
        const posts = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          posts.push(data);
        });
        this.setState({ posts: posts });
      })
      .catch((error) => console.error(error));
  }

  handleSignOut(e) {
    firebase.auth().signOut();
    this.setState({ signOut: true });
  }

  render() {
    if (this.state.signOut) {
      this.setState({ signOut: false });
      return <Redirect to="/login" />;
    }
    if (this.currentUser == null) {
      return <Redirect to="/login" />;
    }
    return (
      <>
        <Navbar />
        <div className="card">
          <Link
            to={"addPost/"}
            style={{ float: "right", marginTop: 22, paddingRight: 30 }}
          >
            <button className="button2"> Create Post </button>
          </Link>
          <h1 style={{ textAlign: "left", paddingLeft: 30 }}>
            Admin Dashboard
          </h1>
          <h1>Welcome, {this.currentUser.email}</h1>
          <button
            className="button2"
            type="submit"
            onClick={this.handleSignOut}
          >
            Sign Out!
          </button>
          <h2 style={{ textAlign: "left", paddingLeft: 30 }}>Blog Archive</h2>
          <div className="container2">
            {this.state.posts &&
              this.state.posts.map((posts, index) => {
                return (
                  <Card2
                    key={index}
                    author={posts.author}
                    image={posts.image}
                    postName={posts.postName}
                    date={posts.createdAt}
                  />
                );
              })}
          </div>
        </div>
      </>
    );
  }
}
