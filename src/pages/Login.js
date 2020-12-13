import React, { useState, Component } from "react";
import Navbar from "../Components/navbar";
import firebase, { auth } from "../config/firebase";
import { Redirect } from "react-router-dom";

/**
 * Class for handling user login
 **/
export default class Login extends Component {
  constructor(props) {
    super();
    this.state = {
      email: "",
      password: "",
      user: null,
      emailHasBeenSent: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.authListener = this.authListener.bind(this);
    this.sendResetEmail = this.sendResetEmail.bind(this);
  }

  componentDidMount() {
    console.log(this.state.email);
    this.authListener();
  }

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  /**
   * method for adding user authentication and details to the firebase database
   **/
  handleLogin(e) {
    e.preventDefault();
    var email = this.state.email;
    var password = this.state.password;
    if (email.length === 0) {
      alert("Email field cannot be empty");
    } else if (password.length === 0) {
      alert("Password field cannot be empty");
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
          console.log(email + " logged in!");
        })
        .catch((err) => {
          console.log(err);
          alert("Invalid username/password");
        });
    }
  }

  /**
   * method responsible for implementing the forgot password feature and sending reset password
   * link to the registered email
   * */
  sendResetEmail(event) {
    const email = this.state.email;
    event.preventDefault();

    console.log(email);
    if (email != "") {
      firebase
        .auth()
        .sendPasswordResetEmail(email)
        .then(() => {
          this.setState({ emailHasBeenSent: true });
          setTimeout(() => {
            this.setState({ emailHasBeenSent: false });
          }, 3000);
          console.log(this.state.emailHasBeenSent);
        })
        .catch(() => {
          console.log("error");
        });
      alert("Check your email");
    } else {
      alert("Enter your email");
    }
  }

  render() {
    // If there already is a user logged in, redirect to the dashboard
    if (this.state.user) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <>
        <Navbar />
        <div className="card4">
          <div className="container3">
            <form>
              <h1 style={{ textAlign: "left", paddingLeft: 30 }}>Login</h1>
              <div className="fields">
                <h2 style={{ textAlign: "left", paddingLeft: 30 }}>Username</h2>
                <div className="entry">
                  <input
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  ></input>
                </div>

                <h2 style={{ textAlign: "left", paddingLeft: 30 }}>Password</h2>
                <div className="entry">
                  <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  ></input>
                </div>
              </div>

              <button
                className="forgotPassBtn"
                style={{
                  float: "left",
                  marginLeft: -190,
                  marginTop: 10,
                  marginBottom: 30,
                }}
                type="submit"
                onClick={this.sendResetEmail}
              >
                Forgot Password?
              </button>

              <button
                style={{ float: "right", marginRight: 50 }}
                className="button2"
                type="submit"
                onClick={this.handleLogin}
              >
                Login
              </button>
            </form>

            <div>
              <img
                style={{ float: "left", marginLeft: 50 }}
                src={"https://i.imgur.com/6IERj0d.jpg"}
                alt="card image"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
