import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJHOp9GN_DCTmtLwaOSBzwETso68yCJCs",
    authDomain: "cashtrack-b30d7.firebaseapp.com",
    projectId: "cashtrack-b30d7",
    storageBucket: "cashtrack-b30d7.appspot.com",
    messagingSenderId: "453358056538",
    appId: "1:453358056538:web:67dfaa4816867bc605d463",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db =  getFirestore(app);
export const googleProvider = new GoogleAuthProvider()
