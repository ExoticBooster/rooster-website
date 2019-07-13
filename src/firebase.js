import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

firebase.initializeApp({
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSANGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
});

const storage = firebase.storage();
const db = firebase.firestore();
const auth = firebase.auth();
// data
const storageRef = storage.ref();
export {
  db,
  auth,
  storageRef,
};
