import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB4QaaC8CCEidZMFYKY-CX7LB9wE5M0f-E",
  authDomain: "nexaart-studio-ts.firebaseapp.com",
  projectId: "nexaart-studio-ts",
  storageBucket: "nexaart-studio-ts.firebasestorage.app",
  messagingSenderId: "331882844376",
  appId: "1:331882844376:web:d534611523a8da45fec7ad",
  measurementId: "G-20HS806D0V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);

// Initialize Analytics conditionally (might not work in all environments)
export const analytics = typeof window !== "undefined" ? isSupported().then(yes => yes ? getAnalytics(app) : null) : null;

export default app;
