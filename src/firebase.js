import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'

var firebaseConfig = {
  apiKey: "AIzaSyBBGJ6cfwMuLo538ZlS6qrjfQW1RxtUui0",
  authDomain: "m-city-204e0.firebaseapp.com",
  databaseURL: "https://m-city-204e0.firebaseio.com",
  projectId: "m-city-204e0",
  storageBucket: "m-city-204e0.appspot.com",
  messagingSenderId: "64298506235",
  appId: "1:64298506235:web:3d2f603e85da5dad745d5e",
  measurementId: "G-2RVQ1P9L8L"
};

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');

export {
    firebase,
    firebaseMatches,
    firebasePromotions
}