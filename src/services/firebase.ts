import firebase from "firebase/app";

import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyDCqDT_lKRn084lemqLqZrwIxTOAsvqJVc",
  authDomain: "letmeask-web-nlw.firebaseapp.com",
  databaseURL: "https://letmeask-web-nlw-default-rtdb.firebaseio.com",
  projectId: "letmeask-web-nlw",
  storageBucket: "letmeask-web-nlw.appspot.com",
  messagingSenderId: "565275107430",
  appId: "1:565275107430:web:fc15b6b35328613a85cda7"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const database = firebase.database()