// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJeLsP6Qs-LYBsWLKORE7XqRF-7Hq90eY",
  authDomain: "manufacture-palnt-client.firebaseapp.com",
  projectId: "manufacture-palnt-client",
  storageBucket: "manufacture-palnt-client.appspot.com",
  messagingSenderId: "1001826338185",
  appId: "1:1001826338185:web:cada6d0640850a45d08d58",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

