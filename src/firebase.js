
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyBFJe5TT9nLY6VCycttu5-xvF42KqsCcy4",
  authDomain: "barterstyle.firebaseapp.com",
  projectId: "barterstyle",
  storageBucket: "barterstyle.appspot.com",
  messagingSenderId: "262518439224",
  appId: "1:262518439224:web:7dedab16d12da1c70b15cd",
  measurementId: "G-KJSD8D3EEF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)