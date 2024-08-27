import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "feedback-forms-67666.firebaseapp.com",
    projectId: "feedback-forms-67666",
    storageBucket: "feedback-forms-67666.appspot.com",
    messagingSenderId: "929145153690",
    appId: "1:929145153690:web:749f851b7392d3bf9f5723",
    measurementId: "G-KQBNYE55B3"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);