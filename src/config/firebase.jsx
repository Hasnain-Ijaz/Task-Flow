import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Apni Firebase Project ki credentials yahan paste karein
const firebaseConfig = {
    apiKey: "AIzaSyAItGqVy7FH83-9lKuommBS6IhFCo2sM3g",
    authDomain: "task-flow-4.firebaseapp.com",
    projectId: "task-flow-4",
    storageBucket: "task-flow-4.firebasestorage.app",
    messagingSenderId: "5663577695",
    appId: "1:5663577695:web:689019d01a563510296dea",
    measurementId: "G-8MMJM67K0G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

export default app;