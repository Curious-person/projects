// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA5X8p5rf_tvh0mYmrqbqDR96pKaUftK70",
    authDomain: "messaging-app-e24ec.firebaseapp.com",
    projectId: "messaging-app-e24ec",
    storageBucket: "messaging-app-e24ec.firebasestorage.app",
    messagingSenderId: "589606058566",
    appId: "1:589606058566:web:b4eb4a4d6fa0fdaa91e847",
    measurementId: "G-3P96WS7Q2W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);