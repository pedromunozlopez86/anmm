import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAPVwIvP_giAuDSm7CeketepnL2JHEo5Rg",
  authDomain: "anmm-637de.firebaseapp.com",
  projectId: "anmm-637de",
  storageBucket: "anmm-637de.appspot.com",
  messagingSenderId: "533357640342",
  appId: "1:533357640342:web:acb9a997b6d38f95c3e0b7",
};

// init firebase
const firebaseApp = initializeApp(firebaseConfig);

// init firestore service
const db = getFirestore(firebaseApp);

// init firestore authorization
const auth = getAuth(firebaseApp);

const storage = getStorage(firebaseApp);

export { db, storage, auth };
