import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import 'firebase/auth';
import 'firebase/database';
import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBhQexwh3mFeWnJlr86MWo1k_kyL3aFR6s",
    authDomain: "todonotes-75606.firebaseapp.com",
    databaseURL: "https://todonotes-75606.firebaseio.com",
    projectId: "todonotes-75606",
    storageBucket: "todonotes-75606.appspot.com",
    messagingSenderId: "603485504020",
    appId: "1:603485504020:web:b08b8e2f0f97d9453c9d01"
};

export const app = firebase.initializeApp(firebaseConfig);



ReactDOM.render(<App deb={"saasas"}/>, document.getElementById('root'));


