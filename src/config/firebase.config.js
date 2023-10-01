// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXmlr1IVmvYKt1vc5JsCKOQjrRTCGZ5u8",
  authDomain: "react-glasses-72072.firebaseapp.com",
  projectId: "react-glasses-72072",
  storageBucket: "react-glasses-72072.appspot.com",
  messagingSenderId: "335716106887",
  appId: "1:335716106887:web:6b40fd18132f042c036e22",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
