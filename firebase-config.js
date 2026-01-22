// --- ☁️ GOTHWAD CLOUD CONFIGURATION (FIXED) --- //

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import { 
    getAuth, 
    GoogleAuthProvider, 
    signInWithPopup, 
    signOut, 
    onAuthStateChanged,
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    updateProfile 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// 👇 Yahan maine Chat ke liye zaruri functions add kar diye hain
import { 
    getFirestore, 
    doc, 
    setDoc, 
    getDoc, 
    collection, 
    getDocs, 
    deleteDoc,
    addDoc,            // New: Message bhejne ke liye
    onSnapshot,        // New: Realtime updates ke liye
    query,             // New: Sort karne ke liye
    orderBy,           // New: Time ke hisab se dikhane ke liye
    serverTimestamp    // New: Server time ke liye
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

// 👇 IMPORTANT: Ab ye sab functions export honge taaki Global Chat use kar sake
export { 
    auth, 
    googleProvider, 
    signInWithPopup, 
    signOut, 
    onAuthStateChanged,
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    updateProfile,
    db, 
    doc, 
    setDoc, 
    getDoc, 
    collection, 
    getDocs, 
    deleteDoc,
    addDoc,            // Exported
    onSnapshot,        // Exported
    query,             // Exported
    orderBy,           // Exported
    serverTimestamp    // Exported
};