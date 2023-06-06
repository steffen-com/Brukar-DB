const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBKCcBXk0OyCkk8WtHEFV0Mt4JxqgMNUng",
    authDomain: "brukar-db.firebaseapp.com",
    projectId: "brukar-db",
    storageBucket: "brukar-db.appspot.com",
    messagingSenderId: "948285804472",
    appId: "1:948285804472:web:cd7fa5c0d438c5dd75094d",
    measurementId: "G-B1DD2M16TK"
});
////////////////////////////////////////////

/* Firebase config */
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    auth.signInWithEmailAndPassword(email, password)
        // Sjekker om bruker er pålogga
        .then((userCredentials) => {
            // Oppretter ein sessionStorage variabel i nettlesaren. Denne brukes for å sjå om bruker er pålogga.
            sessionStorage.setItem("uid", userCredentials.user.uid)
            // Redirect to home.html 
            window.location.href = "./hjeme.html"
        })
        .catch((error) => {
            console.error("Failed: " + error.message);
        })
}
