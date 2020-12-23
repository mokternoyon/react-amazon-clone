import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCoS4hYJDHNjQDSLyOAE3UQI7NW-B-CUAE",
  authDomain: "clone-2113f.firebaseapp.com",
  projectId: "clone-2113f",
  storageBucket: "clone-2113f.appspot.com",
  messagingSenderId: "855520941487",
  appId: "1:855520941487:web:8e588eb0cc93684bc34b5a",
  measurementId: "G-KNH4DWBYHX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
