// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGJBAjR4OTKKMTLRwpiOXUCq651sLGq2U",
  authDomain: "b10-a9-authentication-8c895.firebaseapp.com",
  projectId: "b10-a9-authentication-8c895",
  storageBucket: "b10-a9-authentication-8c895.firebasestorage.app",
  messagingSenderId: "152115025732",
  appId: "1:152115025732:web:ae000427d90ea6c3542911"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;