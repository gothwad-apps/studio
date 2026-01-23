// --- ☁️ GOTHWAD CLOUD CONFIGURATION (OFFLINE ENABLED) --- //

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import { 
    getAuth, 
    GoogleAuthProvider, 
    signInWithPopup, 
    signOut, 
    onAuthStateChanged,
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    updateProfile,
    updateEmail,
    updatePassword
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import { 
    getFirestore, 
    doc, 
    setDoc, 
    getDoc, 
    updateDoc,
    arrayUnion,
    collection, 
    getDocs, 
    deleteDoc,
    addDoc,            
    onSnapshot,        
    query, 
    where,            
    orderBy,           
    serverTimestamp,
    enableIndexedDbPersistence // 👈 YE IMPORT KIYA
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  // ⚠️ APNI ASLI API KEYS YAHAN PASTE KARO WAPAS
  apiKey: "AIzaSyDvwhKoBxJzHthUZvBzLN19kvn8xsgVnY8",
  authDomain: "gothwad-hopweb.firebaseapp.com",
  projectId: "gothwad-hopweb",
  storageBucket: "gothwad-hopweb.firebasestorage.app",
  messagingSenderId: "367330667054",
  appId: "1:367330667054:web:f418a6816c866a17c2cdbf"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

// --- ⚡ ENABLE OFFLINE PERSISTENCE --- //
enableIndexedDbPersistence(db)
  .catch((err) => {
      if (err.code == 'failed-precondition') {
          console.log("Multiple tabs open, persistence can only be enabled in one tab at a time.");
      } else if (err.code == 'unimplemented') {
          console.log("The current browser does not support all of the features required to enable persistence");
      }
  });

// EXPORT EVERYTHING
export { 
    auth, 
    googleProvider, 
    signInWithPopup, 
    signOut, 
    onAuthStateChanged,
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    updateProfile,
    updateEmail,
    updatePassword,
    
    db, 
    doc, 
    setDoc, 
    getDoc, 
    updateDoc,
    arrayUnion,
    collection, 
    getDocs, 
    deleteDoc,
    addDoc,            
    onSnapshot,        
    query, 
    where,            
    orderBy,           
    serverTimestamp    
};
