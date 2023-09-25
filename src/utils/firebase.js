// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKmCGBohc5vTLyyFXAjAKPxrj2htFphSw",
  authDomain: "netflixgpt-732c4.firebaseapp.com",
  projectId: "netflixgpt-732c4",
  storageBucket: "netflixgpt-732c4.appspot.com",
  messagingSenderId: "529560574070",
  appId: "1:529560574070:web:188a2709174fca9649e757",
  measurementId: "G-QLLZN466T1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();