const express = require('express');
const app = express();
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

var firebaseConfig = {
    // insert api key here
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
