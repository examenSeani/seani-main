import firebase from "firebase/app";
import {firebaseConfig} from './variables'
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const app = firebase.app();
const auth = firebase.auth();
const au = firebase.auth();
const db = firebase.firestore();
const now = firebase.firestore.Timestamp.now();
const storage = firebase.storage();

export { auth, db, now, storage,au };