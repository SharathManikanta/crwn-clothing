import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBF2W7qNS5RJFwfRSQ2xE0fpWCpZP8zieE",
    authDomain: "crwn-db-33d85.firebaseapp.com",
    projectId: "crwn-db-33d85",
    storageBucket: "crwn-db-33d85.appspot.com",
    messagingSenderId: "300458305711",
    appId: "1:300458305711:web:38ec12f4de0e8b64010c5a",
    measurementId: "G-6PC8P4RLGP"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'     });
export const signInWithGoogle = () =>  auth.signInWithPopup(provider);

export default firebase;