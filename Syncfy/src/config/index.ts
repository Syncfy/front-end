import firebase from 'firebase/app'
import { initializeApp } from 'firebase/app';

import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAOCAQnVmFlUKrMW3o9_opY6KymRQKzTJ8",
    authDomain: "syncfy-889fe.firebaseapp.com",
    projectId: "syncfy-889fe",
    storageBucket: "syncfy-889fe.appspot.com",
    messagingSenderId: "1060663911675",
    appId: "1:1060663911675:web:c4ba393e4e05f343993c5e"
  };

  if (firebase.getApp.length == 0) {
    const app = initializeApp(firebaseConfig);
  }
  
export default firebase;