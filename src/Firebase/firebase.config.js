// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMM0UmJGPTkfcwt5vNM8g-zC7QQcY_Zvs",
    authDomain: "sip-bite.firebaseapp.com",
    projectId: "sip-bite",
    storageBucket: "sip-bite.appspot.com",
    messagingSenderId: "96648814192",
    appId: "1:96648814192:web:72f62ac4b35c1d07e2deb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth