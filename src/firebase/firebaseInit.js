import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAZodEHTznZlwiRnQLddYWZ2QxVv7djHhE",
  authDomain: "blogs-bc6a8.firebaseapp.com",
  projectId: "blogs-bc6a8",
  storageBucket: "blogs-bc6a8.appspot.com",
  messagingSenderId: "855333541231",
  appId: "1:855333541231:web:0480c28a1dfba65303049a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
