import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"


const firebaseConfig = {

    apiKey: "...",
  
    authDomain: "clone-c443b.firebaseapp.com",
  
    projectId: "clone-c443b",
  
    storageBucket: "clone-c443b.appspot.com",
  
    messagingSenderId: "443105479285",
  
    appId: "1:443105479285:web:b09b844d66df2ac369c63c"
  
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
  
export { db, auth };
