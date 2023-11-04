import React from 'react';
import StackComponent from './src/routes/stack';
import {StatusBar} from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={'#000000'} />
      <StackComponent />
    </>
  );
}
