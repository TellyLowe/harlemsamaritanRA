import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBdSOVNho4anstrKmBB3P2uRJ8tA_wb_bU",
    authDomain: "harlemsamaritan-cf6a5.firebaseapp.com",
    databaseURL: "https://harlemsamaritan-cf6a5-default-rtdb.firebaseio.com",
    projectId: "harlemsamaritan-cf6a5",
    storageBucket: "harlemsamaritan-cf6a5.appspot.com",
    messagingSenderId: "886238078850",
    appId: "1:886238078850:web:cdee47b057d1ce7056919b",
    measurementId: "G-V1D4ZM63YL"
};

firebase.initializeApp(firebaseConfig)