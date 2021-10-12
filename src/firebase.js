import firebase, { initializeApp } from 'firebase/app';

import 'firebase/firestore';
require('firebase/auth')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2DEhjn4vwD0M0P5Qy6aG070QhDQXTZCo",
  authDomain: "chat-clone-87936.firebaseapp.com",
  projectId: "chat-clone-87936",
  storageBucket: "chat-clone-87936.appspot.com",
  messagingSenderId: "521626344990",
  appId: "1:521626344990:web:f98e5b08a500d2eb58d80f",
  measurementId: "G-FKD7HB1K0G",
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();  

const db = firebaseApp.firestore()

export default db;
export { auth, provider };