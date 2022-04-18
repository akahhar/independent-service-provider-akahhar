// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFS5-ulDuKgZ6rOvZ4twI2AvF69Ks9h8g",
  authDomain: "wedding-moments-5a218.firebaseapp.com",
  projectId: "wedding-moments-5a218",
  storageBucket: "wedding-moments-5a218.appspot.com",
  messagingSenderId: "694904026941",
  appId: "1:694904026941:web:8c06ecd4811ecaf60d3754",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
