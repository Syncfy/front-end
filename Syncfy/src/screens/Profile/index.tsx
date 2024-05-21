import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Alert, TouchableOpacity, View } from 'react-native';
import { Container, UserProfileImage, InputField, InputRow, EditIcon, Title } from './style';
import { LogoutButton } from '../../components/LogoutButton';
import { getAuth, signOut, deleteUser } from 'firebase/auth';

const UserPage: React.FC<any> = ({ navigation }) => {
  const [user, setUser] = useState({
    name: 'Syncfy LTDA',
    email: 'syncfy@orçamentos.com',
    phone: '(11) 3385-8010',
    address: 'Av. Paulista, 1106 - 7º andar - Bela Vista',
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://192.168.0.57:8081/user/1');
        setUser(response.data);
      } catch (error) {
        console.log('Using mock data due to API failure:', error);
      }
    };
    fetchUserData();
  }, []);

  const handleDeleteAccount = async () => {
    setLoading(true);
    try {
      await axios.delete('http://192.168.0.57:8081/user/1');
      const auth = getAuth();
      if (auth.currentUser) {
        await deleteUser(auth.currentUser);
      }
      Alert.alert('Deleção de conta', 'Sua conta foi deletada com sucesso.');
      navigation.navigate('Home');
    } catch (error) {
      console.error('Erro ao deletar conta:', error);
      Alert.alert('Deleção falhou', 'Não foi possível deletar sua conta.');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = async (field, value) => {
    setLoading(true);
    try {
      const payload = { [field]: value };
      const response = await axios.put(`http://192.168.0.57:8081/user/1`, payload);
      setUser(prevState => ({ ...prevState, ...response.data }));
      Alert.alert('Sucesso', 'Dados atualizados com sucesso.');
    } catch (error) {
      console.error('Erro ao atualizar dados:', error);
      Alert.alert('Erro', 'Não foi possível atualizar os dados.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <UserProfileImage source={require('../../assets/images/utils/default-profile-image.png')} />
      <View>
        <Title>Nome</Title>
        <InputRow>
          <InputField
            placeholder="Nome"
            value={user.name}
            onChangeText={text => handleEdit('name', text)}
          />
          <TouchableOpacity onPress={() => handleEdit('name', user.name)}>
            <EditIcon source={require('../../assets/icons/edit-active-icon.png')} />
          </TouchableOpacity>
        </InputRow>
      </View>
      <View>
        <Title>E-mail</Title>
        <InputRow>
          <InputField
            placeholder="Email"
            value={user.email}
            onChangeText={text => handleEdit('email', text)}
          />
          <TouchableOpacity onPress={() => handleEdit('email', user.email)}>
            <EditIcon source={require('../../assets/icons/edit-active-icon.png')} />
          </TouchableOpacity>
        </InputRow>
      </View>
      <View>
        <Title>Telefone</Title>
        <InputRow>
          <InputField
            placeholder="Telefone"
            value={user.phone}
            onChangeText={text => handleEdit('phone', text)}
          />
          <TouchableOpacity onPress={() => handleEdit('phone', user.phone)}>
            <EditIcon source={require('../../assets/icons/edit-active-icon.png')} />
          </TouchableOpacity>
        </InputRow>
      </View>
      <View>
        <Title>Endereço</Title>
        <InputRow>
          <InputField
            placeholder="Endereço"
            value={user.address}
            onChangeText={text => handleEdit('address', text)}
          />
          <TouchableOpacity onPress={() => handleEdit('address', user.address)}>
            <EditIcon source={require('../../assets/icons/edit-active-icon.png')} />
          </TouchableOpacity>
        </InputRow>
      </View>
      <LogoutButton onPress={handleDeleteAccount} text="Deletar conta" />
    </Container>
  );
};

export default UserPage;
