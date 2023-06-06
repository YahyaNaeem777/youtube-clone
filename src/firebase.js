import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyDrC98iQ8F8CTdFBNPkDGq2QWz1rY_prZs",
  authDomain: "clone-669c3.firebaseapp.com",
  projectId: "clone-669c3",
  storageBucket: "clone-669c3.appspot.com",
  messagingSenderId: "667223067949",
  appId: "1:667223067949:web:c976228afd6d73c9f117a4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth();