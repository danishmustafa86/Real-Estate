// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  REACT_APP_API_KEY: "AIzaSyD8ZPzNuU3AOm0Ef1TFAeEM0WX6l_kTr6E",
  REACT_APP_AUTH_DOMAIN: "objects-storage.firebaseapp.com",
  REACT_APP_PROJECT_ID: "objects-storage",
  REACT_APP_STORAGE_BUCKET: "objects-storage.firebasestorage.app",  
  REACT_APP_MESSAGING_SENDER_ID: "1098479874753",
  REACT_APP_APP_ID: "1:1098479874753:web:2fe89992ef14de07ae1a40",
  REACT_APP_MEASUREMENT_ID: "G-EHB1GL6DCX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Now that analytics is imported, this works:
// export const analytics = getAnalytics(app);

// And Firestore:
export const db = getFirestore(app);
export const auth = getAuth(app); // Initialize Firebase Authentication and get a reference to the service