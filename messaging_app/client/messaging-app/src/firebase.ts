import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDnjKBGIN9lPW-l2z29OaZKYbZQXQYIT7Q",
    authDomain: "messaging-app-117a7.firebaseapp.com",
    projectId: "messaging-app-117a7",
    storageBucket: "messaging-app-117a7.firebasestorage.app",
    messagingSenderId: "15093963077",
    appId: "1:15093963077:web:8164632bc1a95fa804862c",
    measurementId: "G-3251ND0163"
};

// initialize firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);