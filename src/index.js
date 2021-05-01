import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';




// Initialize Firebase
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCT1ZtZFzCS-RrYBa_QRaDx0FjHMlzUAbg",
  authDomain: "my-evernote-clone-b35f9.firebaseapp.com",
  projectId: "my-evernote-clone-b35f9",
  storageBucket: "my-evernote-clone-b35f9.appspot.com",
  messagingSenderId: "686341580320",
  appId: "1:686341580320:web:50efc3b5f8e6e683b3fe45"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();