import firebase from 'firebase';// Required for side-effects
require("firebase/firestore");

const config = {
  apiKey: "AIzaSyCF22W4VRyoKMsEwWgJXzwTFO2wPTohVTI",
  authDomain: "roller-hockey-france.firebaseapp.com",
  databaseURL: "https://roller-hockey-france.firebaseio.com",
  projectId: "roller-hockey-france",
  storageBucket: "roller-hockey-france.appspot.com",
  messagingSenderId: "373687823800"
};
firebase.initializeApp(config);

const firestore = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
firestore.settings(settings);

export const firebaseApp = firebase;
