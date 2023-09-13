// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4k-dyDpDuE9daYmGdjwOewIQ5sHInvlo",
  authDomain: "movies-567b0.firebaseapp.com",
  projectId: "movies-567b0",
  storageBucket: "movies-567b0.appspot.com",
  messagingSenderId: "194054072425",
  appId: "1:194054072425:web:3f3dcd2f117f9b69621af8",
  measurementId: "G-NVD72KY5NS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);