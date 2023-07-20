import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDu6PCqKYLwuAvwkImRW5vAY9MyIlS2dzA",
  authDomain: "fir-eb561.firebaseapp.com",
  projectId: "fir-eb561",
  storageBucket: "fir-eb561.appspot.com",
  messagingSenderId: "866847716982",
  appId: "1:866847716982:web:ebe6a08de0cf106960d157"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
