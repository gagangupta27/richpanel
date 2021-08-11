import firebase from "firebase";

if (!firebase.apps.length) {
  const firebaseApp = firebase.initializeApp({

  });
} else {
  firebase.app();
}

const db = firebase.database();
const auth = firebase.auth();

export { db, auth };
