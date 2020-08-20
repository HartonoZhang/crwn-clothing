import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCqXjk_pyKoFejK0fTpPMRALX6bxhzsftA",
    authDomain: "crwn-db-1cbbd.firebaseapp.com",
    databaseURL: "https://crwn-db-1cbbd.firebaseio.com",
    projectId: "crwn-db-1cbbd",
    storageBucket: "crwn-db-1cbbd.appspot.com",
    messagingSenderId: "734120999146",
    appId: "1:734120999146:web:ee3a7a1a3e06a56b2fbf93",
    measurementId: "G-FVCG46MQMB"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log("error creating user", error.message);
        };
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;