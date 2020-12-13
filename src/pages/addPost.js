import React, { useState } from "react";
import Navbar from "../Components/navbar";
import { db } from "../config/firebase";
import { Link } from "react-router-dom";

/**
 * Function responsible for adding posts to the database
 */
export default function AddPost() {
  const initialState = {
    postName: "",
    postContent: "",
    image: "",
    authName: "",
    date: new Date().toLocaleString(),
  };

  // settting up initial state
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

  /**
   * Adds the post with the field data to the firebase database and alerts user on
   * successful creation of the post
   * @param e e is the event triggered on form submit
   */
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
    window.history.back();

    alert("Succesfully created post!");
  };

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
          to={"/dashboard"}
          style={{ float: "right", marginTop: 20, paddingRight: 30 }}
        >
          <button className="button2"> Back </button>
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
              <textarea
                style={{ height: 500 }}
                type="text"
                name="postContent"
                value={state.postContent}
                onChange={handleChange}
                required={true}
              ></textarea>
            </div>

            <h3>Image URL:</h3>
            <div class="entry">
              <input
                type="text"
                name="image"
                value={state.image}
                onChange={handleChange}
                style={{ wordWrap: "break-word" }}
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
