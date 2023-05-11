import firebase from "firebase/app";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyDBLVLea5e6OwNt1lQNgmmT9_253GnUAOc",
    authDomain: "react-hooks-blog-3ed48.firebaseapp.com",
    projectId: "react-hooks-blog-3ed48",
    storageBucket: "react-hooks-blog-3ed48.appspot.com",
    messagingSenderId: "337215482162",
    appId: "1:337215482162:web:e9a7a8118290f290ac8f2b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

export default db;