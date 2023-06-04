import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDaPzPACZjiahUHKk50laJj3T4gJXzyuv0",
  authDomain: "nerd-world-8b494.firebaseapp.com",
  projectId: "nerd-world-8b494",
  storageBucket: "nerd-world-8b494.appspot.com",
  messagingSenderId: "723085379143",
  appId: "1:723085379143:web:03e90ac2a005da95ac1362",
  measurementId: "G-591HX4JJRN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);