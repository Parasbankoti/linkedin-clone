import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// import firebase from "firebase/compat/app";
// import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// import { getAuth } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";

// import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDq6PGQLH4MFAv4RRIy_zojISfJhpErF4U",
  authDomain: "linkedin-clone-fdb3a.firebaseapp.com",
  projectId: "linkedin-clone-fdb3a",
  storageBucket: "linkedin-clone-fdb3a.appspot.com",
  messagingSenderId: "956903808915",
  appId: "1:956903808915:web:65f83c5aaa782a80ed5266",
  measurementId: "G-6EXWRBX15C",
};

//const firebaseApp = firebase.initializeApp(firebaseConfig);
//const firebaseApp = initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

//const db = getFirestore(firebaseApp);
//const db = firebaseApp.firestore();
const auth = getAuth(app);

//const auth = getAuth();
//const signIn = signInWithEmailAndPassword;

export { db, auth };
