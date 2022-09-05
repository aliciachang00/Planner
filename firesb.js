// Import the functions you need from the SDKs you need
// import * as firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUYFZhsastW-kBgv4Y7bCHhT2KVeofoRQ",
  authDomain: "todo-firebaselogin.firebaseapp.com",
  projectId: "todo-firebaselogin",
  storageBucket: "todo-firebaselogin.appspot.com",
  messagingSenderId: "103678441634",
  appId: "1:103678441634:web:b5b4fa8d3e41d17566bffb"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const auth = firebase.auth();
const firestore = firebase.firestore();

export { auth, firestore };
