import React, { Component, useState } from "react";
import Navbar from "../Components/navbar";
import fire from "../config/firebase";

// export default class Login extends Component {
//     constructor(props){
//         super();
//         this.state = {
//             email:'',
//             password:'',
//         }

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(e){
//         this.setState({ [e.target.name]: e.target.value });
//     }
    
//     handleSubmit(e){
//         e.preventDefault();
//         var email = this.state.email;
//         var password = this.state.password;

//         // Firebase requires passwords to be of length 6 or above
//         if (password.length < 6) {
//             alert("Password must of length 6 or more.");
//         } else {
//             fire.auth().createUserWithEmailAndPassword(email, password); 
            
//             alert("Signed Up Successfully!");
//         }
//     }

//     render(){
//         return(
//             <>
//             <Navbar/>
//             <div>
//                 <form>
//                     <input name="email" value={this.state.email} onChange={this.handleChange} placeholder="email"></input>
//                     <input name="password" value={this.state.password} onChange={this.handleChange} placeholder="password"></input>
//                     <button type="submit" onClick={this.handleSubmit}>Sign Up!</button>
//                     <button type="submit">Login!</button>
//                 </form>
//             </div>
//             </>
//         );
//     }
// }

// can use either class or function components

function Login(){
    const [state, setState] = useState({
        email:'',
        password:'',
    })

    const handleChange = e => {
        setState({ ...state, [e.target.name]: e.target.value })
    } 

    const handleSubmit = e => {
        e.preventDefault();
        var email = state.email;
        var password = state.password;

        // Firebase requires passwords to be of length 6 or above
        if (password.length < 6) {
            alert("Password must of length 6 or more.");
        } else {
            fire.auth().createUserWithEmailAndPassword(email, password); 
            
            alert("Signed Up Successfully!");
        }
    }

    return(
        <>
        <Navbar/>
        <div>
            <form>
                <input name="email" value={state.email} onChange={handleChange} placeholder="email"></input>
                <input name="password" value={state.password} onChange={handleChange} placeholder="password"></input>
                <button type="submit" onClick={handleSubmit}>Sign Up!</button>
                <button type="submit">Login!</button>
            </form>
        </div>
        </>
    );
}

export default Login;