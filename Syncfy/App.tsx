import React from 'react';
import StackComponent from './src/routes/stack';
import {StatusBar} from 'react-native';
import Toast from 'react-native-toast-message';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAOCAQnVmFlUKrMW3o9_opY6KymRQKzTJ8",
  authDomain: "syncfy-889fe.firebaseapp.com",
  projectId: "syncfy-889fe",
  storageBucket: "syncfy-889fe.appspot.com",
  messagingSenderId: "1060663911675",
  appId: "1:1060663911675:web:c4ba393e4e05f343993c5e"
};

initializeApp(firebaseConfig);

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={'#000000'} />
      <StackComponent />
      <Toast />
    </>
  );
}
