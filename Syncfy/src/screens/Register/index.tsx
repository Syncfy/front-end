import React, {useState} from 'react';
import CadastroForm from '../../components/RegisterForm';
import {TouchableOpacity} from 'react-native';
import {
  Container,
  ContentContainer,
  BackgroundImage,
  Logo,
} from './style';
import Toast from 'react-native-toast-message';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../types/rock-stack-param-list';

type CadastroScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Cadastro'
>;

type Props = {
  navigation: CadastroScreenNavigationProp;
};

const Cadastro: React.FC<Props> = ({navigation}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleCadastro = () => {
    if (loading) {
      return;
    }
  };

  const handleForgotPassword = () => {
    // Lógica para esqueci minha senha
    console.log('Usuário clicou em "Esqueci minha senha"');
  };

  return (
    <Container>
      <BackgroundImage
        source={require('../../assets/images/white-background.png')}>
        <ContentContainer>
          <Logo source={require('../../assets/images/logo.png')} />
          <CadastroForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            onCadastroPress={handleCadastro} cnpj={''} setCnpj={function (text: string): void {
              throw new Error('Function not implemented.');
            } } confirmPassword={''} setConfirmPassword={function (text: string): void {
              throw new Error('Function not implemented.');
            } }          />
          <TouchableOpacity onPress={handleForgotPassword}>
          </TouchableOpacity>
        </ContentContainer>
      </BackgroundImage>
    </Container>
  );
};

export default Cadastro;
