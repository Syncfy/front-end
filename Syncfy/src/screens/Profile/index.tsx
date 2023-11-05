import React, {useState} from 'react';
import {Alert} from 'react-native';
import {Container, UserProfileImage, InputField} from './style';

import {LogoutButton} from '../../components/LogoutButton';

const defaultUserImage = require('../../assets/images/default-profile-image.png');

const UserPage = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleLogout = () => {
    Alert.alert('Logout', 'Você saiu da sua conta.');
    navigation.navigate('Home');
  };

  return (
    <Container>
      <UserProfileImage source={defaultUserImage} />
      <InputField placeholder="Nome" value={name} onChangeText={setName} />
      <InputField placeholder="Email" value={email} onChangeText={setEmail} />
      <InputField placeholder="CNPJ" value={cnpj} onChangeText={setCnpj} />
      <InputField
        placeholder="Telefone"
        value={phone}
        onChangeText={setPhone}
      />
      <InputField
        placeholder="Endereço"
        value={address}
        onChangeText={setAddress}
      />
      <LogoutButton onPress={handleLogout} text="Logout" />
    </Container>
  );
};

export default UserPage;
