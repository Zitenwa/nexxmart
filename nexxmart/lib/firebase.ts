import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC9JLU5KG4DoLBUMlYggqGRdlvYjb4h8cc",
  authDomain: "nexxmart-36615.firebaseapp.com",
  projectId: "nexxmart-36615",
  storageBucket: "nexxmart-36615.firebasestorage.app",
  messagingSenderId: "721329576637",
  appId: "1:721329576637:web:1bcaa8635d9a763ec4b5d4"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
