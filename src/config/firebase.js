import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBgSyfBl6_nTrzO2TowMUUGAzfrSrYkze8",
  authDomain: "fir-learnning-d99c3.firebaseapp.com",
  projectId: "fir-learnning-d99c3",
  storageBucket: "fir-learnning-d99c3.appspot.com",
  messagingSenderId: "801571750451",
  appId: "1:801571750451:web:f3ae31f933c31bd5ef9946",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();
const storage = getStorage();

export { db, storage };
