import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { CheckBox } from 'react-native-elements';

const CustomCheckBox = () => {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
      <CheckBox
        checked={isSelected}
        onPress={() => setSelection(!isSelected)}
        containerStyle={styles.checkbox}
      />
      <Text style={styles.label}>Termos de privacidade</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginLeft: 20, 
  },
  checkbox: {
    flex: 1,
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 0,
    paddingLeft: 60,
  },
  label: {
    flex: 9,
    margin: 8,
  },
});

export default CustomCheckBox;
