function komp() {
    window.location.ref = "https://ndla.no/nn/utdanning/informasjonsteknologi-og-medieproduksjon/vg2"
}

function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
       user = prompt("Please enter your name :","");
       if (user != "" && user != null) {
         setCookie("username", user, 30);
       }
    }
  }

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
