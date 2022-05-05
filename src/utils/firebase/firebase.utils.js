import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

//creating firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC96gCnqOo_dsjyCohuRs1pYkg6zrA3Soc',
  authDomain: 'crwn-db-21f2c.firebaseapp.com',
  projectId: 'crwn-db-21f2c',
  storageBucket: 'crwn-db-21f2c.appspot.com',
  messagingSenderId: '305457536313',
  appId: '1:305457536313:web:49ddf2a153a06d02429ce8',
  measurementId: 'G-FTVYWWLVT2',
};

//initializing te configuration
const firebaseApp = initializeApp(firebaseConfig);

//Google Authentication setup
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

//Datebase Setup
export const db = getFirestore();

//setup for user login data
export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  if(!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  //if user doesn't exits
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('Error creating the user', error.message);
    }
  }

  return userDocRef;
};

//set up for signup using email and password

export const createAuthUserWithEmailAndPassword = async(email,password) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}