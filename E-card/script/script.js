// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBL-ORT0whMRMDo7LneZr0XdOKXRRp8qVA",
  authDomain: "e-card-5e937.firebaseapp.com",
  projectId: "e-card-5e937",
  storageBucket: "e-card-5e937.firebasestorage.app",
  messagingSenderId: "129824619718",
  appId: "1:129824619718:web:ed9dedf906fcd0693fabc7",
  measurementId: "G-ZJCQ70MZMJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);