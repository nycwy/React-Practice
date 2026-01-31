// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJQQGiJFZ6hDALgj_rTTYjIVQTyYytvIo",
    authDomain: "xyzz-6ec7e.firebaseapp.com",
    projectId: "xyzz-6ec7e",
    storageBucket: "xyzz-6ec7e.firebasestorage.app",
    messagingSenderId: "867395433783",
    appId: "1:867395433783:web:9b57aeb08f8a6cc66116b2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
