import React, { useState } from "react";
import Navbar from "../Components/navbar";
import { db } from "../config/firebase";
import { Link } from "react-router-dom";

export default function EditPost() {

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
      </div>
    </>
  );
}
