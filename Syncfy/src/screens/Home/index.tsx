import {View, Text, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackTypes} from '../../routes/stack';

const Home = () => {
  const navigation = useNavigation<StackTypes>();

  return (
    <View style={{marginTop: 60}}>
      <Text style={{textAlign: 'center'}}>Home</Text>
      <Button
        title="Fazer login"
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
    </View>
  );
};

export default Home;
