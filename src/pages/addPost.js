import React, { useState } from "react";
import Navbar from "../Components/navbar";
import { db } from "../config/firebase";
import { Link } from "react-router-dom";

export default function AddPost() {
  const initialState = {
    postName: "",
    postContent: "",
    image: "",
    authName: "",
    date: new Date().toLocaleString(),
  };

  const [state, setState] = useState({
    postName: "",
    postContent: "",
    image: "",
    authName: "",
    date: new Date().toLocaleString(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // this gives us value of the input
    console.log(value);
    // this returns postName
    console.log([name]);

    // updates the state
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      author: state.authName,
      createdAt: state.date,
      image: state.image,
      postContent: state.postContent,
      postName: state.postName,
    });

    setState({ ...initialState });
  };

  return (
    <>
      <Navbar />
      <div className="card3">
        <Link
          to={"/dashboard"}
          style={{ float: "right", marginTop: 22, paddingRight: 30 }}
        >
          <button className="button2"> Back </button>
        </Link>
        <h1 style={{ textAlign: "left", paddingLeft: 30 }}>Admin Dashboard</h1>
        <h2 style={{ textAlign: "left", paddingLeft: 30 }}>Create New Post</h2>
        <form
          style={{ textAlign: "left", marginLeft: 30, marginBottom: 20 }}
          onSubmit={handleSubmit}
        >
          <div className="fields">
              <h3>Post Title:</h3>
              <div class="entry">
                <input
                  type="text"
                  name="postName"
                  value={state.postName}
                  onChange={handleChange}
                  required={true}
                ></input>
              </div>

              <h3>Post Content:</h3>
              <div class="entry">
                <input
                  style={{ height: 500, width: 800 }}
                  type="text"
                  name="postContent"
                  value={state.postContent}
                  onChange={handleChange}
                  required={true}
                ></input>
              </div>

              <h3>Image URL:</h3>
              <div class="entry">
                <input
                  type="text"
                  name="image"
                  value={state.image}
                  onChange={handleChange}
                ></input>
              </div>

              <h3>Author Name:</h3>
              <div class="entry">
                <input
                  type="text"
                  name="authName"
                  value={state.authName}
                  onChange={handleChange}
                  required={true}
                ></input>
              </div>

              <h3>Date:</h3>
              <div class="entry">
                <input
                  type="text"
                  name="date"
                  value={state.date}
                  onChange={handleChange}
                  readOnly={true}
                ></input>
              </div>
          </div>
          <button className="button">Submit</button>
        </form>
      </div>
    </>
  );
}
