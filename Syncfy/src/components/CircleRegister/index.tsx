import React from 'react';
import { View, StyleSheet } from 'react-native';

const CircleInCorner = () => {
  return (
    <View style={styles.circle} />
  );
};

const styles = StyleSheet.create({
  circle: {
    position: 'absolute',
    width: 400, 
    height: 400, 
    backgroundColor: 'rgba(0, 255, 0, 0.1)', 
    borderRadius: 400,
    top: -80, 
    right: -50, 
  },
});

export default CircleInCorner;
