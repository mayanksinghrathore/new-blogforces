import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBb2JzPG_4Fc1t1EEwuNpPgKNGnhEbSmtA",
  authDomain: "fir-code-lab-6c10d.firebaseapp.com",
  projectId: "fir-code-lab-6c10d",
  storageBucket: "fir-code-lab-6c10d.appspot.com",
  messagingSenderId: "650085428222",
  appId: "1:650085428222:web:a48b2e084f51f8cf5d6eaf"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
