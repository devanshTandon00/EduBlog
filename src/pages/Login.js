import React, { useState, Component } from "react";
import Navbar from "../Components/navbar";
import firebase, { auth } from "../config/firebase";
import { Redirect } from "react-router-dom";
import Dashboard from "./Dashboard";

export default class Login extends Component {
  constructor(props) {
    super();
    this.state = {
      email: "",
      password: "",
      user: null,
    };

    this.handleChange = this.handleChange.bind(this);
    //this.handleSignUp = this.handleSignUp.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
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

  handleLogin(e) {
    e.preventDefault();
    var email = this.state.email;
    var password = this.state.password;

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

  render() {
    // If there already is a user logged in, redirect to the dashboard
    if (this.state.user) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <>
        <Navbar />
        <div className="card">
          <h1 style={{ textAlign: "left", paddingLeft: 30 }}>Login</h1>

          <form>
            <h2 style={{ textAlign: "left", paddingLeft: 30 }}>Username</h2>

            <input
              style={{ float: "left", marginLeft: 30 }}
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder=" Enter Email"
            ></input>

            <br />

            <h2 style={{ textAlign: "left", paddingLeft: 30 }}>Password</h2>

            <input
              style={{ float: "left", marginLeft: 30 }}
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder=" Enter Password"
            ></input>

            <br />
            <br />

            <button
              style={{ float: "left", marginLeft: 30, marginBottom: 30 }}
              className="button2"
              type="submit"
              onClick={this.handleLogin}
            >
              Login!
            </button>
          </form>
        </div>
      </>
    );
  }
}

//handleSignUp(e) {
//e.preventDefault();
//var email = this.state.email;
//var password = this.state.password;

// Firebase requires passwords to be of length 6 or above
//if (password.length < 6) {
//alert("Password must of length 6 or more.");
//} else {
// firebase.auth().createUserWithEmailAndPassword(email, password);
//alert("Signed Up Successfully!");
//}
//}

//<button type="submit" onClick={this.handleSignUp}>
//Sign Up!
//</button>

// can use either class or function components

// export default function Login() {
//   const [state, setState] = useState({
//     email: '',
//     password: '',
//     loggedIn: false,
//   });

//   let history = useHistory();

//   // spreads object into individual props and we provide prop so resulting object has updated and old props
//   const handleChange = e => {
//     const { name, value } = e.target;

//     // using [name] allows us to dynamically set the name i.e. use the name constant defined above
//     setState({ ...state, [name]: value });
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     const email = state.email;
//     const password = state.password;

//     // Firebase requires passwords to be of length 6 or above
//     if (password.length < 6) {
//       alert('Password must of length 6 or more.');
//     } else {
//       auth.createUserWithEmailAndPassword(email, password).then((user) => {
//         console.log("New Account Created!");
//       }).catch((err) => {
//         console.log(err);
//       });
//       alert('Signed Up Successfully!');
//     }
//   };

//   const handleLogin = e => {
//     e.preventDefault();
//     firebase.auth().signInWithEmailAndPassword(state.email, state.password).then((user) => {
//       console.log(user + " logged in!");
//       setState({ loggedIn: true });
//       history.push("/admin-dashboard");
//     }).catch((err) => {
//       console.log(err);
//     });
//   };

//   return (
//     <>
//       <Navbar />
//       <div>
//         <form>
//           <input type="email" name="email" value={state.email} onChange={handleChange} placeholder="enter email"></input>
//           <input type="password" name="password" value={state.password} onChange={handleChange} placeholder="enter password"></input>
//           <button type="submit" onClick={handleSubmit}>Sign Up</button>
//           <button type="submit" onClick={handleLogin}>Login</button>
//         </form>
//       </div>
//     </>
//   );
// }
