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

  export const createUserProfileDocument  = async (userAuth,additionalData) =>{
      if(!userAuth) return;

      const userRef  = firestore.doc(`users/${userAuth.uid}`);
      const snapShot = await userRef.get();
    console.log(snapShot);

    if(!snapShot.exists){
        const {displayName,email} = userAuth;
        const createAt = new Date();


        try{
          await userRef.set({
              displayName,
              email,
              createAt,
              ...additionalData

          })

        }catch(error){
          console.log('error creating user',error.message);
        }        
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'     });
export const signInWithGoogle = () =>  auth.signInWithPopup(provider);

export default firebase;