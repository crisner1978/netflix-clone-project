import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCPAiSjQ3SbPJqJDVV9mfkQ-iJfaCnPd1o",
    authDomain: "netflix-clone-project-cd39b.firebaseapp.com",
    projectId: "netflix-clone-project-cd39b",
    storageBucket: "netflix-clone-project-cd39b.appspot.com",
    messagingSenderId: "968656140085",
    appId: "1:968656140085:web:bdb8fa175eb3d1ae233e7c"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;