import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

// ================= FIREBASE CONFIG =================

const firebaseConfig = {
  apiKey: "AIzaSyByrfSqiUPuiwQqbtpXHsh1MnwFnih3MYg",
  authDomain: "cineverse-ott.firebaseapp.com",
  projectId: "cineverse-ott",
  storageBucket: "cineverse-ott.firebasestorage.app",
  messagingSenderId: "1078952102857",
  appId: "1:1078952102857:web:4795289dd54c3f9d983618",
  measurementId: "G-5CRWCT5NNH"
};

// ================= INITIALIZE FIREBASE =================

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// ================= GOOGLE LOGIN =================

window.googleLogin = async function () {

    try {

        const result = await signInWithPopup(auth, provider);

        const user = result.user;

        localStorage.setItem("userName", user.displayName || "");
        localStorage.setItem("userEmail", user.email || "");
        localStorage.setItem("userPhoto", user.photoURL || "");

        alert("Welcome " + user.displayName);

        window.location.replace("home.html");

    } catch (error) {

        console.error(error);

        alert("Login Failed\n\n" + error.message);

    }

};

// ================= GOOGLE LOGOUT =================

window.googleLogout = async function () {

    try {

        await signOut(auth);

        localStorage.removeItem("userName");
        localStorage.removeItem("userEmail");
        localStorage.removeItem("userPhoto");

        alert("Logged out successfully!");

        window.location.replace("index.html");

    } catch (error) {

        console.error(error);

        alert("Logout Failed\n\n" + error.message);

    }

};

// ================= AUTO REDIRECT =================

onAuthStateChanged(auth, (user) => {

    const page = window.location.pathname;

    // User login ayi unte index page nunchi home ki redirect
    if (
        user &&
        (page.endsWith("index.html") || page === "/" || page.endsWith("/"))
    ) {

        window.location.replace("home.html");
    }

    // User login kakapothe home page nunchi index ki redirect
    if (
        !user &&
        page.endsWith("home.html")
    ) {

        window.location.replace("index.html");
    }

});
