import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyCzSnZkWFXM00E3f4pANrmbo33B9Z0KSY8",
  authDomain: "portfolio-database-1d7ea.firebaseapp.com",
  projectId: "portfolio-database-1d7ea",
  storageBucket: "portfolio-database-1d7ea.appspot.com",
  messagingSenderId: "676331066389",
  appId: "1:676331066389:web:b6f39ce204dd94c40e2a1c"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
// const analytics = getAnalytics(app);






