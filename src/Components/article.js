import React, { Component, useEffect, useState } from "react";
import { useLocation } from "react-router";
import "../App.css";
import { db } from "../config/firebase";

export default function Article() {
  let location = useLocation();

  const [state, setState] = useState({
    postContent: "",
  });

  useEffect(() => {
    db.collection("posts")
      .where("postName", "==", location.aboutProps.postName)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          const data = doc.data();
          setState({ postContent: data.postContent });
        });
      });
  }, []);

  return <div className="card">{state.postContent}</div>;
}
