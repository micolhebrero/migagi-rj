// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCProVSGPhg7282iusRVV7PfvjDK0cpmpE",
  authDomain: "migagi-tejidos.firebaseapp.com",
  projectId: "migagi-tejidos",
  storageBucket: "migagi-tejidos.appspot.com",
  messagingSenderId: "671444832453",
  appId: "1:671444832453:web:078b265c49ac3d6f9aa0ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)