// Setting up Firebase with our Website

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBOouELRj1EShwsag75jFpr7S9LrwLCew8",
  authDomain: "authentication-cb806.firebaseapp.com",
  projectId: "authentication-cb806",
  storageBucket: "authentication-cb806.appspot.com",
  messagingSenderId: "332191129643",
  appId: "1:332191129643:web:fa9a459510f7f2f6738a6e",
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();


// Sign Up Function

const signup = ()=>{

    const email = document.getElementById("email").value;
    const Password = document.getElementById("Password").value;
    console.log(email, Password);

    firebase.auth().createUserWithEmailAndPassword(email, Password)
  .then((result) => {
    // Signed in 
    document.write("You are Signed UP");
    console.log(result);
    // ...
  })
  .catch((error) => {
   console.log(error.code);
   console.log(error.message);
    // ..
  });
}