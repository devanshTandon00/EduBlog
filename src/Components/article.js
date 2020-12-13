import React, { Component, useEffect, useState } from "react";
import { useLocation } from "react-router";
import "../App.css";
import { db } from "../config/firebase";

/**
 * Function for setting the article page when particular blog is clicked on the homepage
 */
export default function Article() {
  let location = useLocation();

  const [state, setState] = useState({
    postName: "",
    author: "",
    createdAt: "",
    image: "",
    postContent: "",
  });

  /**
   * Fetches all the data from the firebase database about the specific post and sets the state with its value
   */
  useEffect(() => {
    db.collection("posts")
      .where("postName", "==", location.aboutProps.postName)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          const data = doc.data();
          setState({
            postName: data.postName,
            author: data.author,
            createdAt: data.createdAt,
            image: data.image,
            postContent: data.postContent,
          });
        });
      });
  }, []);

  /**
   * Renders the information onto the page
   */
  return (
    <div className="card">
      <h1>{state.postName}</h1>
      <h2> By {state.author} </h2>
      {state.createdAt}
      <div className="header">
        <img src={state.image} alt="card image" className="header_img" />
      </div>
      <p className="postContent">{state.postContent}</p>
    </div>
  );
}
