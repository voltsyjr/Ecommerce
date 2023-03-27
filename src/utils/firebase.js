// Your web app's Firebase configuration
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCIllSkmHS79L_-Hejb60CKZY9xLxMA2vg",
    authDomain: "clone-64750.firebaseapp.com",
    projectId: "clone-64750",
    storageBucket: "clone-64750.appspot.com",
    messagingSenderId: "1089572690602",
    appId: "1:1089572690602:web:d668d782ccc041b9e44ed3"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };





