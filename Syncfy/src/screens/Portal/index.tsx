// Portal.tsx
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Portal: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Portal</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Portal;
