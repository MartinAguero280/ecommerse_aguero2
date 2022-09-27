// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCSnG-XRSkMD4UZbO9Fm8a_YhZ8gRSpGc4",
    authDomain: "coderhouse-react-ecommer-8ea0e.firebaseapp.com",
    projectId: "coderhouse-react-ecommer-8ea0e",
    storageBucket: "coderhouse-react-ecommer-8ea0e.appspot.com",
    messagingSenderId: "359070638648",
    appId: "1:359070638648:web:f15a93a95409f8cd967ccd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//base de datos
export const db = getFirestore(app);

