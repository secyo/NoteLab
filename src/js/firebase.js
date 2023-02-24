// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDopL-h7Fl7qTKSPzS6gk31dgsuNnWoeS4",
  authDomain: "notelab-d4d88.firebaseapp.com",
  projectId: "notelab-d4d88",
  storageBucket: "notelab-d4d88.appspot.com",
  messagingSenderId: "51541890809",
  appId: "1:51541890809:web:57e532c65b307606087428"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
    db,
    auth
}