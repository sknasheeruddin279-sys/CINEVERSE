import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyByrfSqiUPuiwQqbtpXHsh1MnwFnih3MYg",
  authDomain: "cineverse-ott.firebaseapp.com",
  projectId: "cineverse-ott",
  storageBucket: "cineverse-ott.firebasestorage.app",
  messagingSenderId: "1078952102857",
  appId: "1:1078952102857:web:4795289dd54c3f9d983618",
  measurementId: "G-5CRWCT5NNH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// ================= GOOGLE LOGIN =================

window.googleLogin = async function () {

  try {

    const result = await signInWithPopup(auth, provider);

    const user = result.user;

    localStorage.setItem("userName", user.displayName);
    localStorage.setItem("userEmail", user.email);
    localStorage.setItem("userPhoto", user.photoURL);

    alert("Welcome " + user.displayName);

    window.location.href = "home.html";

  } catch (error) {

    console.error(error);

    alert("Login Failed\n\n" + error.message);

  }

};

// ================= LOGOUT =================

window.googleLogout = async function () {

  await signOut(auth);

  localStorage.clear();

  window.location.href = "index.html";

};

// ================= AUTO LOGIN =================

onAuthStateChanged(auth, (user) => {

  if (user) {

    if (
      window.location.pathname.endsWith("index.html") ||
      window.location.pathname === "/"
    ) {

      window.location.href = "home.html";

    }

  }

});