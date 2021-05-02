import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
   apiKey: "AIzaSyCmZAhFE1AOfEpivNicD2bSgsWRGn-GdtY",
    authDomain: "pocket-pn-assignment-db.firebaseapp.com",
    projectId: "pocket-pn-assignment-db",
    storageBucket: "pocket-pn-assignment-db.appspot.com",
    messagingSenderId: "182994669766",
    appId: "1:182994669766:web:5e3dc1d2a9e4b0c7b547c7"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const connectFirebase = firebaseApp.firestore();
export const { Timestamp } = firebase.firestore;
export const patientCollection = connectFirebase.collection('patients');
