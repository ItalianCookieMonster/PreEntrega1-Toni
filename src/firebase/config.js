// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBwEaNW4PE_xnXgP6p6d8EOBheDpu2Yl0I",
    authDomain: "coder-ecommerce-b6f87.firebaseapp.com",
    projectId: "coder-ecommerce-b6f87",
    storageBucket: "coder-ecommerce-b6f87.appspot.com",
    messagingSenderId: "283052937398",
    appId: "1:283052937398:web:0d154822044568f73ad617"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase  = () => app
