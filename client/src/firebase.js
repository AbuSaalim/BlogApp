// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-5002d.firebaseapp.com",
  projectId: "mern-blog-5002d",
  storageBucket: "mern-blog-5002d.appspot.com",
  messagingSenderId: "447856958200",
  appId: "1:447856958200:web:ff14dbfc041d266230390d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
