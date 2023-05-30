// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



//// TODO: Add SDKs for Firebase products that you want to use
//// https://firebase.google.com/docs/web/setup#available-libraries
//
//// Your web app's Firebase configuration
//// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//const firebaseConfig = {
//  apiKey: "AIzaSyDXDU3Od5NfaQuEvWD32NDkIUysQ6cJlJk",
//  authDomain: "pia-tuto-yt.firebaseapp.com",
//  projectId: "pia-tuto-yt",
//  storageBucket: "pia-tuto-yt.appspot.com",
//  messagingSenderId: "815439357408",
//  appId: "1:815439357408:web:66a02567f5688d5b9f7785"
//};
//
//// Initialize Firebase
//export const app = initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFEUze6ho4KtmcDAsTaU7XFnh-DYvD5G8",
  authDomain: "revision-41f65.firebaseapp.com",
  projectId: "revision-41f65",
  storageBucket: "revision-41f65.appspot.com",
  messagingSenderId: "875531269022",
  appId: "1:875531269022:web:ebaf3680995f96e28f1c8f",
  measurementId: "G-QHPL4YLL0M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const analytics = getAnalytics(app);
export const storage = getStorage();
export const db = getFirestore();
export default app
