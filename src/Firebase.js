import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyCDsjpY71GxIYeQFpjQKVYtwSUc4wsIX8s",
    authDomain: "gaming-station-137a4.firebaseapp.com",
    projectId: "gaming-station-137a4",
    storageBucket: "gaming-station-137a4.appspot.com",
    messagingSenderId: "512909588652",
    appId: "1:512909588652:web:c7c2a534245114b85a8709",
    measurementId: "G-6NX9RP4W3Z"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 