const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBKCcBXk0OyCkk8WtHEFV0Mt4JxqgMNUng",
    authDomain: "brukar-db.firebaseapp.com",
    projectId: "brukar-db",
    storageBucket: "brukar-db.appspot.com",
    messagingSenderId: "948285804472",
    appId: "1:948285804472:web:cd7fa5c0d438c5dd75094d",
    measurementId: "G-B1DD2M16TK"
});

/* Firebase config */
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Logger inn bruker med epost og passord 

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    auth.signInWithEmailAndPassword(email, password)
        // Sjekker om bruker er pålogga
        .then((userCredentials) => {
            // Oppretter ein sessionStorage variabel i nettlesaren. Denne brukes for å sjå om bruker er pålogga.
            sessionStorage.setItem("uid", userCredentials.user.uid)
            // Redirect to home.html 
            window.location.href = "./users.html"
        })
        .catch((error) => {
            console.error("Failed: " + error.message);
        })
}

// Oppretter bruker med epost og passord 


// Oppretter bruker som kan logge seg på firebase og få tilgang til nettstaden
function signUp() {
    const email = document.getElementById("email").value;
    const alder = document.getElementById("alder").value;
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const password = document.getElementById("password").value;
    const skule = document.getElementById("skule").value;
    const tlf = document.getElementById("tlf").value;

    // Oppretter bruker som kan logge seg på firebase og få tilgang til nettstaden
    auth.createUserWithEmailAndPassword(email, password)
        // Lagrer også brukeren i collection "users"
        .then((userCredentials) => {
            sessionStorage.setItem("uid", userCredentials.user.uid)
            db.collection("users").doc().set({
                firstname: fname,
                lastname: lname,
                skule: skule,
                tlf: tlf,
                email: email,
                alder: alder,
                password: password,
                userId: userCredentials.user.uid
            })
                .then(function () {
                    window.location.href = "./index.html";
                })
        })

        .catch((err) => {
            alert(err.message)
            console.log(err.code);
            console.log(err.message);
        });
}

