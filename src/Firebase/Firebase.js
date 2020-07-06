import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB6Hx2f4uKUjU5ikqr4YtcZcfX7l3fh2GE",
    authDomain: "shop-35898.firebaseapp.com",
    databaseURL: "https://shop-35898.firebaseio.com",
    projectId: "shop-35898",
    storageBucket: "shop-35898.appspot.com",
    messagingSenderId: "951219305932",
    appId: "1:951219305932:web:668b2185101bc40a297169",
    measurementId: "G-BBV9TN6PD9"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error){
            console.log(error.message);
        }
    }
    return userRef;
}


// Initialize Firebase
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
  