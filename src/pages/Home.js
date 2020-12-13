import React, { Component } from "react";
import Navbar from "../Components/navbar";
import Header from "../Components/header";
import Card from "../Components/card";
// eslint-disable-next-line
import { db } from "../config/firebase";

/**
 * Implementation for the home page
 */
export default class Home extends Component {
  state = { posts: null };

  /**
   * Fetches data from the firebase database when component is mounted
   */
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

  /**
   * Renders the card compoenent with the post data on the homepage
   */
  render() {
    return (
      <>
        <Navbar />
        <Header />
        <div className="container">
          {this.state.posts &&
            this.state.posts.map((posts, index) => {
              return (
                <Card
                  key={index}
                  author={posts.author}
                  image={posts.image}
                  postName={posts.postName}
                  date={posts.createdAt}
                />
              );
            })}
        </div>
      </>
    );
  }
}
