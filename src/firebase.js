import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAE92QkO9Tf9M9X1rdoIqjJPFj-P5Xxtig",
  authDomain: "hypepitch-324ed.firebaseapp.com",
  projectId: "hypepitch-324ed",
  storageBucket: "hypepitch-324ed.appspot.com",
  messagingSenderId: "100470846573",
  appId: "1:100470846573:web:9e90d43c178c6df08bbb64",
  measurementId: "G-YDVGVN4JR4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const GAuthProvider = new GoogleAuthProvider(auth);
