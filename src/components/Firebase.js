import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import '@firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCwi_ZAS7rnyT1pOdKTFlmA6PDMiwJC-2o",
    authDomain: "linkedin-clone-bdfca.firebaseapp.com",
    projectId: "linkedin-clone-bdfca",
    storageBucket: "linkedin-clone-bdfca.appspot.com",
    messagingSenderId: "491778851667",
    appId: "1:491778851667:web:15171f1cd26d9c331617a6",
    measurementId: "G-1HTRNEZV8S"
  };

 
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
//   const auth = firebase.auth();

export {db}