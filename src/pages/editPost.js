import React, { useState } from "react";
import Navbar from "../Components/navbar";
import { db } from "../config/firebase";
import { Link, useLocation } from "react-router-dom";

export default function EditPost() {
  let location = useLocation();

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
    // console.log(location.aboutProps, state.postName);

    // updates the state
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("posts")
      .where("postName", "==", location.aboutProps.postName)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          console.log(doc.id, doc.data());
          doc.ref.update({
            author: state.authName,
            createdAt: state.date,
            image: state.image,
            postContent: state.postContent,
            postName: state.postName,
          });
        });
      });

    setState({ ...initialState });
  };

  return (
    <>
      <Navbar />
      <div className="card">
        <Link
          to={"/dashboard"}
          style={{ float: "right", marginTop: 22, paddingRight: 30 }}
        >
          <button className="button2"> Back </button>
        </Link>
        <h1 style={{ textAlign: "left", paddingLeft: 30 }}>Admin Dashboard</h1>
        <h2 style={{ textAlign: "left", paddingLeft: 30 }}>Edit Post</h2>

        {/* <button onClick={handleSubmit}>Tester</button> */}
        <form
          style={{ textAlign: "left", marginLeft: 30, marginBottom: 20 }}
          onSubmit={handleSubmit}
        >
          <div className="postInfo">
            <label>
              Post Title:
              <br></br>
              <br></br>
              <input
                type="text"
                name="postName"
                value={state.postName}
                onChange={handleChange}
                required={true}
                placeholder="Enter the post title..."
              ></input>
            </label>
            <br></br>
            <br></br>

            <label>
              Post Content:
              <br></br>
              <br></br>
              <input
                style={{ height: 500, width: 800 }}
                type="text"
                name="postContent"
                value={state.postContent}
                onChange={handleChange}
                required={true}
                placeholder="Enter post content"
              ></input>
            </label>
            <br></br>
            <br></br>

            <label>
              Image URL:
              <br></br>
              <br></br>
              <input
                type="text"
                name="image"
                value={state.image}
                onChange={handleChange}
                placeholder="Enter the image URL..."
              ></input>
            </label>
            <br></br>
            <br></br>

            <label>
              {" "}
              Author Name:
              <br></br>
              <br></br>
              <input
                type="text"
                name="authName"
                value={state.authName}
                onChange={handleChange}
                required={true}
                placeholder="Enter the author name..."
              ></input>
            </label>
            <br></br>
            <br></br>

            <label>
              {" "}
              Date:
              <br></br>
              <br></br>
              <input
                type="text"
                name="date"
                value={state.date}
                onChange={handleChange}
                readOnly={true}
              ></input>
            </label>
            <br></br>
            <br></br>
          </div>
          <button className="button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
