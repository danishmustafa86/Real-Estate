// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8ZPzNuU3AOm0Ef1TFAeEM0WX6l_kTr6E",
  authDomain: "objects-storage.firebaseapp.com",
  projectId: "objects-storage",
  storageBucket: "objects-storage.firebasestorage.app",
  messagingSenderId: "1098479874753",
  appId: "1:1098479874753:web:2fe89992ef14de07ae1a40",
  measurementId: "G-EHB1GL6DCX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Now that analytics is imported, this works:
// export const analytics = getAnalytics(app);

// And Firestore:
export const db = getFirestore(app);