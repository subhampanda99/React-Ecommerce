import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyClTBqainsov4ey_x-qPVPXOU3xQCdqeKQ",
  authDomain: "clone-662ae.firebaseapp.com",
  databaseURL: "https://clone-662ae.firebaseio.com",
  projectId: "clone-662ae",
  storageBucket: "clone-662ae.appspot.com",
  messagingSenderId: "376480325535",
  appId: "1:376480325535:web:37cdcfdac8ed074382a7aa",
  measurementId: "G-X7X8ENLSPR"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };