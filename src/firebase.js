import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyC9pKD9QxhfbAmI1e2vuGjLmc3Mpc-kYcU",
  authDomain: "lowcodetool.firebaseapp.com",
  projectId: "lowcodetool",
  storageBucket: "lowcodetool.appspot.com",
  messagingSenderId: "75188382965",
  appId: "1:75188382965:web:fd7ee0006505fe369669bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getDatabase(app);