import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDq6PGQLH4MFAv4RRIy_zojISfJhpErF4U",
  authDomain: "linkedin-clone-fdb3a.firebaseapp.com",
  projectId: "linkedin-clone-fdb3a",
  storageBucket: "linkedin-clone-fdb3a.appspot.com",
  messagingSenderId: "956903808915",
  appId: "1:956903808915:web:65f83c5aaa782a80ed5266",
  measurementId: "G-6EXWRBX15C",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };
