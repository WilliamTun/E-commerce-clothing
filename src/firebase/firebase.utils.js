import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAwQmNksAwTgk2zBIigWwfVI8TG8Ieir8Y",
    authDomain: "e-commerce-884c4.firebaseapp.com",
    databaseURL: "https://e-commerce-884c4.firebaseio.com",
    projectId: "e-commerce-884c4",
    storageBucket: "e-commerce-884c4.appspot.com",
    messagingSenderId: "621632299981",
    appId: "1:621632299981:web:f6d4ff975ceb924351da84",
    measurementId: "G-KSSW8B79TB"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;