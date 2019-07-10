import firebase from 'firebase';
import 'firebase/firestore';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyBx6L2JeXbt51Unc-djenk-iAyRUKprZtc',
  authDomain: 'rooster-4faf7.firebaseapp.com',
  databaseURL: 'https://rooster-4faf7.firebaseio.com',
  projectId: 'rooster-4faf7',
  storageBucket: 'rooster-4faf7.appspot.com',
  messagingSenderId: '985634018262',
  appId: '1:985634018262:web:097748c628a4c107',
});

const db = app.database();
const auth = firebase.auth();
// data
const toursCollection = db.ref('categories');

export {
  db,
  auth,
  toursCollection,
};
