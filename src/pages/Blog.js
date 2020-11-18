import React, { Component } from "react";
import Navbar from "../Components/navbar";
import Article from "../Components/article";
import { db } from "../config/firebase";

export default class Blog extends Component {
  state = { posts: null };

  componentDidMount() {
    console.log('mounted');
    db.collection('posts').get()
      .then(snapshot => {
        console.log(snapshot);
        const posts = [];
        snapshot.forEach(doc => {
          const data = doc.data();
          posts.push(data);
        });
        this.setState({ posts: posts });
        console.log(posts);
      }).catch(error => console.error(error));
  }

  render() {
    return (
      <>
        <Navbar />
        <Article />
      </>
    );
  }
}
