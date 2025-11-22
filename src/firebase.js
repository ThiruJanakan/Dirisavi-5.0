// Firebase imports
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDiejHcnn1uCKeu6Mow7x8vQySknk-o7bw",
  authDomain: "dirisavi-website.firebaseapp.com",
  projectId: "dirisavi-website",
  storageBucket: "dirisavi-website.appspot.com",
  messagingSenderId: "153019279534",
  appId: "1:153019279534:web:86fc4dfeb0ce6a4845653f",
  measurementId: "G-STR2D0L2MS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Export Auth & Firestore for your app
export const auth = getAuth(app);
export const db = getFirestore(app);
