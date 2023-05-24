// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxFOXFBnYTW9Swjloy3qcFpwtXxXP8TUY",
  authDomain: "react-journal-103e1.firebaseapp.com",
  projectId: "react-journal-103e1",
  storageBucket: "react-journal-103e1.appspot.com",
  messagingSenderId: "947527346445",
  appId: "1:947527346445:web:a0e78da3a22694992c6844"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp) 
export const FirebaseDB = getFirestore(FirebaseApp)