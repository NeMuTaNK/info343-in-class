import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCOcB4kveEyFtF0yMG2pE12uaBizmYgzss",
    authDomain: "info-343-react-app.firebaseapp.com",
    databaseURL: "https://info-343-react-app.firebaseio.com",
    projectId: "info-343-react-app",
    storageBucket: "info-343-react-app.appspot.com",
    messagingSenderId: "964318038111"
  };
  firebase.initializeApp(config);
  
firebase.auth().signInAnonymously()
  .then(() => {
    ReactDOM.render(<App />, document.getElementById('root'));
    registerServiceWorker();
  })
  .catch(error => console.error(error));

