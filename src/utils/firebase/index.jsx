import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6kPBKvR6RZpLvZecXPSVpk7-CBqcTTZc",
  authDomain: "anime-dd9be.firebaseapp.com",
  projectId: "anime-dd9be",
  storageBucket: "anime-dd9be.appspot.com",
  messagingSenderId: "992313394055",
  appId: "1:992313394055:web:fd60a9335fa70d24dd0922",
  measurementId: "G-1DSEDH934Q"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, auth, storage };
