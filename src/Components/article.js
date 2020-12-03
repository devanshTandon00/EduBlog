import React, { Component, useEffect, useState } from "react";
import { useLocation } from "react-router";
import "../App.css";
import { db } from "../config/firebase";

export default function Article() {
  let location = useLocation();

  const [state, setState] = useState({
    postName: "",
    author: "",
    createdAt: "",
    image: "",
    postContent: "",
  });

  useEffect(() => {
    db.collection("posts")
      .where("postName", "==", location.aboutProps.postName)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          const data = doc.data();
          setState({ postName: data.postName, author: data.author, createdAt: data.createdAt, image: data.image, postContent: data.postContent });
        });
      });
  }, []);

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
