import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBWhqpa6gtqxv2Z4W74YXdXNSkALqVu2HU",
    authDomain: "finalblogwebsite-c03c3.firebaseapp.com",
    projectId: "finalblogwebsite-c03c3",
    storageBucket: "finalblogwebsite-c03c3.appspot.com",
    messagingSenderId: "461550735334",
    appId: "1:461550735334:web:18733cbb87e5d7843dd027",
    measurementId: "G-JZ6E5WY3EK"
  };

const app = initializeApp(firebaseConfig);

// google auth

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {

    let user = null;

    await signInWithPopup(auth, provider)
    .then((result) => {
        user = result.user
    })
    .catch((err) => {
        console.log(err)
    })

    return user;
}