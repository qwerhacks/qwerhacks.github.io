const express = require('express');
const app = express();
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyDK-MnoR8ez-lUndQT7n47o1MP1pUj7_DQ",
    authDomain: "qwerhacks-email-list.firebaseapp.com",
    databaseURL: "https://qwerhacks-email-list.firebaseio.com",
    projectId: "qwerhacks-email-list",
    storageBucket: "qwerhacks-email-list.appspot.com",
    messagingSenderId: "775611971858",
    appId: "1:775611971858:web:c1f0b4ba46a5a4fc"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

app.get('/', (req, res, next) => {
    console.log("req.params: " + JSON.stringify(req.params));
    res.status(200).json({
        message: "This API works 3.0"
    })
});

app.get('/email-list/:email', (req, res, next) => {
    email = req.params.email;
    db.collection('emails').add({
        name: "placeholder name",
        email: req.params.email,
    })
    
    res.status(200).json({
        message: ("email sent: " + req.params.email)
    })
});

module.exports = app;
