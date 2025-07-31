// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "",
  authDomain: "into-academy.firebaseapp.com",
  projectId: "into-academy",
  storageBucket: "into-academy.firebasestorage.app",
  messagingSenderId: "843925533530",
  appId: "1:843925533530:web:142120354bbb445948f963"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
