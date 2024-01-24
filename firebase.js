import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeJy4Od6TQTOFViE-H8AEAv5yLsXrAxm4",
  authDomain: "react-notes-11c5b.firebaseapp.com",
  projectId: "react-notes-11c5b",
  storageBucket: "react-notes-11c5b.appspot.com",
  messagingSenderId: "550150403896",
  appId: "1:550150403896:web:30cb0f057afcbb678ef3cd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const notesCollection = collection(database, "Notes")
export default notesCollection