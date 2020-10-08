import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBs3yBcbQGQB28r3dIXwu26f9HzUg6rflQ",
    authDomain: "npath-blog.firebaseapp.com",
    databaseURL: "https://npath-blog.firebaseio.com",
    projectId: "npath-blog",
    storageBucket: "npath-blog.appspot.com",
    messagingSenderId: "89871968991",
    appId: "1:89871968991:web:01944962ed23d8813d176a",
    measurementId: "G-24GM5718RV"
}

const fire = firebase.initializeApp(firebaseConfig);
export default fire;