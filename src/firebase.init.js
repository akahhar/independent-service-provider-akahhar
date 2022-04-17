// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrLHvQaXLIkkaRODjwlYO0WMLWD_qqm54",
  authDomain: "wedding-moments.firebaseapp.com",
  projectId: "wedding-moments",
  storageBucket: "wedding-moments.appspot.com",
  messagingSenderId: "1012312482023",
  appId: "1:1012312482023:web:de2302b970dc7e37510242",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
