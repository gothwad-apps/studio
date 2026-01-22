// --- ☁️ GOTHWAD CLOUD CONFIGURATION (FINAL FIX) --- //

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
    updateEmail,      // Profile ke liye
    updatePassword    // Profile ke liye
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import { 
    getFirestore, 
    doc, 
    setDoc, 
    getDoc, 
    updateDoc,         // 👈 YE MISSING THA (Ab Add kar diya)
    collection, 
    getDocs, 
    deleteDoc,
    addDoc,            
    onSnapshot,        
    query,             
    where,             // Profile search ke liye
    orderBy,           
    serverTimestamp    
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
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
    updateDoc,         // 👈 Yahan bhi export karna zaroori hai
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