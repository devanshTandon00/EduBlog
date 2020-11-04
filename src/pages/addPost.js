import React, { useState } from 'react';
import Navbar from '../Components/navbar';
import { db } from "../config/firebase";

export default function AddPost() {
    const [state, setState] = useState({
        postName: '',
        postContent: '',
        image: '',
        authName: '',
        date: '',
    });

    const handleChange = e => {
        const {name, value} = e.target
        // this gives us value of the input
        console.log(value);
        // this returns postName
        console.log([name]);

        // updates the state 
        setState({ ...state, [name]: value})
    }

    const handleSubmit = e => {
        db.collection('posts')
            .add({
                author: state.authName,
                createdAt: state.date,
                image: state.image,
                postContent: state.postContent,
                postName: state.postName
            })
    }

    return(
        <>
            <Navbar />
            <form onSubmit = {handleSubmit}>
                <h1>Create New Post</h1>
                <div className = 'postInfo'> 
                    <label>Enter post Name: 
                        <input type = 'text' name = 'postName' value = {state.postName} onChange = {handleChange} placeholder = 'Enter the post title ... ' ></input>
                    </label>
                    <br></br>
                    <br></br>

                    <label>Enter post Content: 
                        <input type = 'text' name = 'postContent' value = {state.postContent} onChange = {handleChange} placeholder = 'Enter the post conent ... ' ></input>
                    </label>
                    <br></br>
                    <br></br>

                    <label> Enter image: 
                        <input type = 'text' name = 'image' value = {state.image} onChange = {handleChange} placeholder = 'Enter the image URl ... '></input>
                    </label>
                    <br></br><br></br>

                    <label> Enter author name: 
                        <input type = 'text' name = 'authName' value = {state.authName} onChange = {handleChange} placeholder = 'Enter the autor name ... '></input>
                    </label>
                    <br></br>
                    <br></br>

                    <label> Enter date: 
                        <input type = 'text' name = 'date' value = {state.date} onChange = {handleChange} placeholder = 'Enter the date of creation ... '></input>
                    </label>
                    <br></br><br></br>
                </div>
                <button>Submit</button>
            </form>
        </>
    )
}