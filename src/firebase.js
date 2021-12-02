import firebase from "firebase/compat/app";
import 'firebase/compat/auth'; //for authentication
import 'firebase/compat/storage'; //for storage
import 'firebase/compat/database'; //for realtime database
import 'firebase/compat/firestore'; //for cloud firestore

const firebaseConfig = {
    apiKey: "AIzaSyBFzwwKyTalTdGfbH5PXWOdwBpHaOdcr4g",
    authDomain: "messaging-app-mern-ffe37.firebaseapp.com",
    projectId: "messaging-app-mern-ffe37",
    storageBucket: "messaging-app-mern-ffe37.appspot.com",
    messagingSenderId: "637905796337",
    appId: "1:637905796337:web:b9abdaf716a6c2a6423d50",
    measurementId: "G-EV5SMN5D9D"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {auth, provider}
  export default db
