import React, { useState, Component } from "react";
import Navbar from "../Components/navbar";
import firebase, { auth } from "../config/firebase";
import { Redirect } from "react-router-dom";

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
    //this.handleSignUp = this.handleSignUp.bind(this);
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

  sendResetEmail(event) {
    const email = this.state.email;
    event.preventDefault();

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
                  marginLeft: 30,
                  marginBottom: 30,
                }}
                type="submit"
                onClick={this.sendResetEmail}
              >
                Forgot Password?
              </button>
              <br></br>
              <br></br>
              <br></br>
              <button
                style={{ float: "left", marginLeft: 30, marginBottom: 30 }}
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
