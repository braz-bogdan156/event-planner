import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHpWK6Qscc1CeKq1YtNlVdOqTf5P-Lgb0",
  authDomain: "auth-form-bd2c3.firebaseapp.com",
  projectId: "auth-form-bd2c3",
  storageBucket: "auth-form-bd2c3.firebasestorage.app",
  messagingSenderId: "822455842686",
  appId: "1:822455842686:web:dd6c7690a8e0bab834652f",

};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);