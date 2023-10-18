import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBkbpN9kDr3QYbFfMjMcDyvsiAMBRteWi4",
    authDomain: "admin-window.firebaseapp.com",
    projectId: "admin-window",
    storageBucket: "admin-window.appspot.com",
    messagingSenderId: "21196721470",
    appId: "1:21196721470:web:be2dc3f88a788301baf06f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);