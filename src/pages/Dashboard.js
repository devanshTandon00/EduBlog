import React, { Component } from "react";
import Navbar from "../Components/navbar";
import Card2 from "../Components/card2";
import { Redirect, Link } from "react-router-dom";
import firebase, { auth, db } from "../config/firebase";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      posts: null,
      signOut: false,
      user: null,
      // emailHasBeenSent: false,
    };

    this.handleSignOut = this.handleSignOut.bind(this);
    // this.sendResetEmail = this.sendResetEmail.bind(this);
  }

  currentUser = firebase.auth().currentUser;

  // sendResetEmail(event) {
  //   console.log(event);
  //   const email = this.state.email;

  //   event.preventDefault();
  //   console.log(this.currentUser.email);
  //   firebase
  //     .auth()
  //     .sendPasswordResetEmail(this.currentUser.email)
  //     .then(() => {
  //       console.log(this.currentUser.email);
  //       this.setState({ emailHasBeenSent: true });
  //       // setTimeout(() => {
  //       //   this.setState({ emailHasBeenSent: false });
  //       // }, 3000);
  //       console.log(this.state.emailHasBeenSent);
  //     })
  //     .catch(() => {
  //       console.log("error");
  //       // setError("Error resetting password");
  //     });
  // }

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

        <div className="card3">
          <svg
            style={{
              float: "left",
              width: 45,
              height: 45,
              marginLeft: 30,
              marginRight: 10,
              marginTop: 18,
            }}
            class="svg-icon"
            viewBox="0 0 20 20"
          >
            <path d="M12.443,9.672c0.203-0.496,0.329-1.052,0.329-1.652c0-1.969-1.241-3.565-2.772-3.565S7.228,6.051,7.228,8.02c0,0.599,0.126,1.156,0.33,1.652c-1.379,0.555-2.31,1.553-2.31,2.704c0,1.75,2.128,3.169,4.753,3.169c2.624,0,4.753-1.419,4.753-3.169C14.753,11.225,13.821,10.227,12.443,9.672z M10,5.247c1.094,0,1.98,1.242,1.98,2.773c0,1.531-0.887,2.772-1.98,2.772S8.02,9.551,8.02,8.02C8.02,6.489,8.906,5.247,10,5.247z M10,14.753c-2.187,0-3.96-1.063-3.96-2.377c0-0.854,0.757-1.596,1.885-2.015c0.508,0.745,1.245,1.224,2.076,1.224s1.567-0.479,2.076-1.224c1.127,0.418,1.885,1.162,1.885,2.015C13.961,13.689,12.188,14.753,10,14.753z M10,0.891c-5.031,0-9.109,4.079-9.109,9.109c0,5.031,4.079,9.109,9.109,9.109c5.031,0,9.109-4.078,9.109-9.109C19.109,4.969,15.031,0.891,10,0.891z M10,18.317c-4.593,0-8.317-3.725-8.317-8.317c0-4.593,3.724-8.317,8.317-8.317c4.593,0,8.317,3.724,8.317,8.317C18.317,14.593,14.593,18.317,10,18.317z"></path>
          </svg>
          <Link
            to={"addPost/"}
            style={{ float: "right", marginTop: 20, paddingRight: 30 }}
          >
            <button className="button2"> Create Post </button>
          </Link>
          <h1
            style={{
              textAlign: "left",
              paddingLeft: 30,
              marginTop: 20,
              fontSize: 35,
            }}
          >
            Admin Dashboard
          </h1>
          <h1 style={{ fontSize: 28 }}>Welcome, {this.currentUser.email}</h1>
          <button
            className="button2"
            type="submit"
            onClick={this.handleSignOut}
          >
            Sign Out
          </button>
          <h1 style={{ textAlign: "left", paddingLeft: 30 }}>Blog Archive</h1>
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
