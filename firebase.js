import { initializeApp } from
"https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged
} from
"https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";


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


// ================= TOAST MESSAGE =================

function showToast(message, type = "success") {

    // Previous toast unte remove chestundi
    const oldToast =
        document.getElementById("firebaseToast");

    if (oldToast) {
        oldToast.remove();
    }

    const toast =
        document.createElement("div");

    toast.id = "firebaseToast";
    toast.textContent = message;

    toast.style.position = "fixed";
    toast.style.top = "20px";
    toast.style.right = "20px";
    toast.style.zIndex = "99999";

    toast.style.maxWidth = "320px";
    toast.style.padding = "14px 20px";

    toast.style.borderRadius = "10px";
    toast.style.color = "white";
    toast.style.fontSize = "15px";
    toast.style.fontWeight = "600";

    toast.style.background =
        type === "error"
            ? "#d32f2f"
            : "#1b8a3a";

    toast.style.boxShadow =
        "0 8px 25px rgba(0, 0, 0, 0.45)";

    toast.style.opacity = "0";
    toast.style.transform =
        "translateX(40px)";

    toast.style.transition =
        "all 0.35s ease";

    document.body.appendChild(toast);

    // Smooth entry animation
    setTimeout(() => {

        toast.style.opacity = "1";
        toast.style.transform =
            "translateX(0)";

    }, 50);

    // 3 seconds tarvata remove
    setTimeout(() => {

        toast.style.opacity = "0";
        toast.style.transform =
            "translateX(40px)";

        setTimeout(() => {
            toast.remove();
        }, 350);

    }, 3000);
}


// ================= GOOGLE LOGIN =================

window.googleLogin = async function () {

    try {

        const result =
            await signInWithPopup(
                auth,
                provider
            );

        const user = result.user;

        localStorage.setItem(
            "userName",
            user.displayName || "User"
        );

        localStorage.setItem(
            "userEmail",
            user.email || ""
        );

        localStorage.setItem(
            "userPhoto",
            user.photoURL || ""
        );

        // Home page lo display cheyadaniki save chestundi
        sessionStorage.setItem(
            "toastMessage",
            `Welcome, ${user.displayName || "User"} 👋`
        );

        sessionStorage.setItem(
            "toastType",
            "success"
        );

        window.location.replace("splash.html");
    

    } catch (error) {

        console.error(
            "Google Login Error:",
            error
        );

        showToast(
            "Google login failed. Please try again.",
            "error"
        );

    }

};


// ================= GOOGLE LOGOUT =================

window.googleLogout = async function () {

    try {

        await signOut(auth);

        localStorage.removeItem("userName");
        localStorage.removeItem("userEmail");
        localStorage.removeItem("userPhoto");

        // Login page lo logout message display
        sessionStorage.setItem(
            "toastMessage",
            "Logged out successfully 👋"
        );

        sessionStorage.setItem(
            "toastType",
            "success"
        );

        window.location.replace(
            "index.html"
        );

    } catch (error) {

        console.error(
            "Logout Error:",
            error
        );

        showToast(
            "Logout failed. Please try again.",
            "error"
        );

    }

};


// ================= SHOW SAVED TOAST =================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const toastMessage =
            sessionStorage.getItem(
                "toastMessage"
            );

        const toastType =
            sessionStorage.getItem(
                "toastType"
            ) || "success";

        if (toastMessage) {

            showToast(
                toastMessage,
                toastType
            );

            // Refresh chesinappudu malli raakunda remove
            sessionStorage.removeItem(
                "toastMessage"
            );

            sessionStorage.removeItem(
                "toastType"
            );

        }

    }
);


// ================= AUTH STATE CHECK =================

onAuthStateChanged(
    auth,
    (user) => {

        const page =
            window.location.pathname;

        const isLoginPage =
            page.endsWith("index.html") ||
            page === "/" ||
            page.endsWith("/");

        const isHomePage =
            page.endsWith("home.html");

        if (user) {

            localStorage.setItem(
                "userName",
                user.displayName || "User"
            );

            localStorage.setItem(
                "userEmail",
                user.email || ""
            );

            localStorage.setItem(
                "userPhoto",
                user.photoURL || ""
            );

            if (isLoginPage) {

                window.location.replace(
                    "splash.html"
                );

            }

        } else if (isHomePage) {

            window.location.replace(
                "index.html"
            );

        }

    }
);
