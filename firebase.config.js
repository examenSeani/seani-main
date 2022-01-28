import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const {
  FIREBASE_AUTHDOMAIN,
  FIREBASE_DATABASE,
  FIREBASE_PROJECT_ID,
} = process.env;
const {
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_SENDER_ID,
  FIREBASE_APP_ID,
  FIREBASE_MENSURABLE,
} = process.env;

const loadDB = () => {
  try {
    const config = {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: FIREBASE_AUTHDOMAIN,
      databaseURL: FIREBASE_DATABASE,
      projectId: FIREBASE_PROJECT_ID,
      storageBucket: FIREBASE_STORAGE_BUCKET,
      messagingSenderId: FIREBASE_SENDER_ID,
      appId: FIREBASE_APP_ID,
      measurementId: FIREBASE_MENSURABLE,
    };

    firebase.initializeApp(config)
  } catch (error) {
      console.error(error)
  }

  return firebase;
};

export default loadDB;