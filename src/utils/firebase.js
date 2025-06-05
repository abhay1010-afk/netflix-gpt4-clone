// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCattzcBBX5TKTi45jrB1LvE2UU7jMDPA8",
  authDomain: "netflixgpt-5553c.firebaseapp.com",
  projectId: "netflixgpt-5553c",
  storageBucket: "netflixgpt-5553c.firebasestorage.app",
  messagingSenderId: "152844949265",
  appId: "1:152844949265:web:d5679d429d0424db4e1eb0",
  measurementId: "G-2YK4BMT98X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 
export default analytics;
 export const auth = getAuth();