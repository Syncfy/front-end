import React, {useState} from 'react';
import {Alert, TouchableOpacity} from 'react-native';
import {
  Container,
  UserProfileImage,
  InputField,
  InputRow,
  EditIcon,
} from './style';

import {LogoutButton} from '../../components/LogoutButton';

const defaultUserImage = require('../../assets/images/default-profile-image.png');
const editIcon = require('../../assets/icons/edit-active-icon.png');

const UserPage = ({navigation}) => {
  const [name, setName] = useState('Syncfy LTDA');
  const [email, setEmail] = useState('syncfy@orçamentos.com');
  const [cnpj, setCnpj] = useState('11.319.526/0001-55');
  const [phone, setPhone] = useState('(11) 3385-8010');
  const [address, setAddress] = useState(
    'Av. Paulista, 1106 - 7º andar - Bela Vista',
  );

  const handleLogout = () => {
    Alert.alert('Logout', 'Você saiu da sua conta.');
    navigation.navigate('Home');
  };

  // Função para lidar com a edição do campo
  const handleEdit = (field: string) => {
    Alert.alert('Editar', `Editar ${field}`);
  };

  return (
    <Container>
      <UserProfileImage source={defaultUserImage} />

      <InputRow>
        <InputField
          placeholder="Nome"
          value={name}
          onChangeText={text => setName(text)}
        />
        <TouchableOpacity onPress={() => handleEdit('nome')}>
          <EditIcon source={editIcon} />
        </TouchableOpacity>
      </InputRow>

      <InputRow>
        <InputField
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TouchableOpacity onPress={() => handleEdit('email')}>
          <EditIcon source={editIcon} />
        </TouchableOpacity>
      </InputRow>

      <InputRow>
        <InputField
          placeholder="CNPJ"
          value={cnpj}
          onChangeText={text => setCnpj(text)}
        />
        <TouchableOpacity onPress={() => handleEdit('CNPJ')}>
          <EditIcon source={editIcon} />
        </TouchableOpacity>
      </InputRow>

      <InputRow>
        <InputField
          placeholder="Telefone"
          value={phone}
          onChangeText={text => setPhone(text)}
        />
        <TouchableOpacity onPress={() => handleEdit('telefone')}>
          <EditIcon source={editIcon} />
        </TouchableOpacity>
      </InputRow>

      <InputRow>
        <InputField
          placeholder="Endereço"
          value={address}
          onChangeText={text => setAddress(text)}
        />
        <TouchableOpacity onPress={() => handleEdit('endereço')}>
          <EditIcon source={editIcon} />
        </TouchableOpacity>
      </InputRow>

      <LogoutButton onPress={handleLogout} text="Logout" />
    </Container>
  );
};

export default UserPage;
