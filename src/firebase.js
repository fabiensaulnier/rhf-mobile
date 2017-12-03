import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDBD973cxRVD9Vf8qo7oRXMn8R17VBi8N4',
  authDomain: 'rhf-mobile-fe57c.firebaseapp.com',
  databaseURL: 'https://rhf-mobile-fe57c.firebaseio.com',
  projectId: 'rhf-mobile-fe57c',
  storageBucket: 'rhf-mobile-fe57c.appspot.com',
  messagingSenderId: '533770704272',
};

firebase.initializeApp(config);

// Listen for authentication state to change.
firebase.auth().onAuthStateChanged((user) => {
  if (user != null) {
    console.log("We are authenticated now!");
  }

  // Do other things
});

export default firebase;
