// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD3yzdmX6Bh2K6h2TniCIkc2gzn3ZtbrBE",
    authDomain: "project-name-a6131.firebaseapp.com",
    projectId: "project-name-a6131",
    storageBucket: "project-name-a6131.appspot.com",
    messagingSenderId: "284960508415",
    appId: "1:284960508415:web:c54d00073098e1f03c7fca",
    measurementId: "G-R4518DY19N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
