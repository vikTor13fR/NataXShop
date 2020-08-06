import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDvu_O42lUfynFeRuuW4zxoXDLg-HJxczI",
    authDomain: "natashop-763bf.firebaseapp.com",
    databaseURL: "https://natashop-763bf.firebaseio.com",
    projectId: "natashop-763bf",
    storageBucket: "natashop-763bf.appspot.com",
    messagingSenderId: "314279416845",
    appId: "1:314279416845:web:474941a635d790f17db144",
    measurementId: "G-29DEZ2Y5RK"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };