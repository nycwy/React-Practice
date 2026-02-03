import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDnwLPrfak-IUTxw0hE1v1fmMe0H2ND1Qc",
    authDomain: "social-media-7190a.firebaseapp.com",
    projectId: "social-media-7190a",
    storageBucket: "social-media-7190a.firebasestorage.app",
    messagingSenderId: "217937697517",
    appId: "1:217937697517:web:be9dc62597924841cc8ae4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);