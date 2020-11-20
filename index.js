var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/database");

var firebaseConfig = {
    apiKey: "AIzaSyDbUxGgj1vQfTrnQhfxnTJB-ZoUdale6po",
    authDomain: "fir-workshop-e046f.firebaseapp.com",
    databaseURL: "https://fir-workshop-e046f.firebaseio.com",
    projectId: "fir-workshop-e046f",
    storageBucket: "fir-workshop-e046f.appspot.com",
    messagingSenderId: "1084277960731",
    appId: "1:1084277960731:web:34192ec7d43016e74b88be"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


firebase.database().ref().child('users').once('value', snap =>{
    console.log(snap.val())
})