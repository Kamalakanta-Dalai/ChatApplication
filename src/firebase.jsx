import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyBVLU5hBjNj14xuSOdGlVXEZ0XK-KnPBus",
  authDomain: "live-chat-c592e.firebaseapp.com",
  projectId: "live-chat-c592e",
  storageBucket: "live-chat-c592e.appspot.com",
  messagingSenderId: "826268045350",
  appId: "1:826268045350:web:812663419f1325e43d16e7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
