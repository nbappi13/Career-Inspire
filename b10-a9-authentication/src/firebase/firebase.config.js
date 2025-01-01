
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyAGJBAjR4OTKKMTLRwpiOXUCq651sLGq2U",
  authDomain: "b10-a9-authentication-8c895.firebaseapp.com",
  projectId: "b10-a9-authentication-8c895",
  storageBucket: "b10-a9-authentication-8c895.firebasestorage.app",
  messagingSenderId: "152115025732",
  appId: "1:152115025732:web:ae000427d90ea6c3542911"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth }; 

export default app;
