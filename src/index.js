import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';




// Initialize Firebase
const firebaseApp = firebase.initializeApp( {
  apiKey: "AIzaSyAGRt60Hp1TYO2v6Q7xg6S8V7L5KE4xL1A",
  authDomain: "evernote-64706.firebaseapp.com",
  projectId: "evernote-64706",
  storageBucket: "evernote-64706.appspot.com",
  messagingSenderId: "271691830215",
  appId: "1:271691830215:web:fec3c039fe97d54a5effe2"
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