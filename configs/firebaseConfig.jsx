// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "al-short.firebaseapp.com",
  projectId: "al-short",
  storageBucket: "al-short.firebasestorage.app",
  messagingSenderId: "143616429255",
  appId: "1:143616429255:web:6a08ad79e066156a4ec2e2",
  measurementId: "G-B5F8DCG80J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);