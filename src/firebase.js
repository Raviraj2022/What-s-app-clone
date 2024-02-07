import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnd3Ix2emOqzCmLXbDsIwwbXTunq5Lxjo",
  authDomain: "whatsapp-clone-27c24.firebaseapp.com",
  projectId: "whatsapp-clone-27c24",
  storageBucket: "whatsapp-clone-27c24.appspot.com",
  messagingSenderId: "986186480395",
  appId: "1:986186480395:web:750d5cf4ce9f60fcd1800e",
  measurementId: "G-TKM56VB2ZP",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
export { auth, provider };
export default db;
