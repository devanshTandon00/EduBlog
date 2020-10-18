import React, { Component } from "react";
import Navbar from "../Components/navbar";
import Header from "../Components/header";
import Card from "../Components/card";
import { db, auth } from "../config/firebase";

export default class Home extends Component{
state = {posts:null}

componentDidMount()
  {
    console.log('mounted')
    db.collection('posts').get().then( snapshot => {
      const posts = []
      snapshot.forEach( doc => {
        const data = doc.data()
        posts.push(data)
      })
      this.setState({posts: posts })
    })
    .catch( error => console.log(error))
  }
  render(){
  return (
    <>
    <Navbar/>
    <Header/>
      <div class="container">
          {
            this.state.posts && this.state.posts.map(posts => {
              return(
                <Card
                author={posts.author}
                image={posts.image}
                postName={posts.postName}
                date={posts.createdAt}
                />
              )
            })          
          }
      </div>
    </>
  );
}
}
