import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Firestore를 가져옵니다.

const firebaseConfig = {
  apiKey: "AIzaSyBL-ORT0whMRMDo7LneZr0XdOKXRRp8qVA",
  authDomain: "e-card-5e937.firebaseapp.com",
  projectId: "e-card-5e937",
  storageBucket: "e-card-5e937.appspot.com", // storageBucket 경로 수정
  messagingSenderId: "129824619718",
  appId: "1:129824619718:web:ed9dedf906fcd0693fabc7",
  measurementId: "G-ZJCQ70MZMJ",
};

// Firebase 앱 초기화
const app = initializeApp(firebaseConfig);

// Firestore 초기화
const db = getFirestore(app);

// Analytics 초기화 (선택 사항)
const analytics = getAnalytics(app);

export { db };
