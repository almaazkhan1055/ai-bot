// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDp9EhGftYvPbe3D48yyc6Axpe9DUUEGCw",
  authDomain: "ai-bot-5d7d9.firebaseapp.com",
  projectId: "ai-bot-5d7d9",
  storageBucket: "ai-bot-5d7d9.firebasestorage.app",
  messagingSenderId: "445485133839",
  appId: "1:445485133839:web:49659c34119f10c9ecb37a",
  measurementId: "G-PQVMRLWBMB",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
