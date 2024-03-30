import React, { useState } from 'react';
import LoginForm from '../../components/LoginForm';
import { TouchableOpacity } from 'react-native';
import {
  Container,
  ContentContainer,
  BackgroundImage,
  Logo,
  ForgotPasswordText,
} from './style';
import Toast from 'react-native-toast-message';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/rock-stack-param-list';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const Login: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const auth = getAuth();

  const handleLogin = () => {
    if (loading) {
      return;
    }

    if (!email || !password) {
      Toast.show({
        type: 'error',
        text1: 'Erro',
        text2: 'Por favor, insira e-mail e senha.',
      });
      return;
    }

    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setLoading(false);
        Toast.show({
          type: 'success',
          text1: 'Sucesso',
          text2: 'Login realizado com sucesso!',
        });
        navigation.navigate('TabNavigator');
      })
      .catch((error) => {
        setLoading(false);
        Toast.show({
          type: 'error',
          text1: 'Erro',
          text2: 'Credenciais inválidas ou erro de servidor.',
        });
        console.error('Erro de login:', error);
      });
  };

  const handleForgotPassword = () => {
    // Aqui você implementaria a lógica para resetar a senha
    console.log('Usuário clicou em "Esqueci minha senha"');
  };

  return (
    <Container>
      <BackgroundImage
        source={require('../../assets/images/white-background.png')}>
        <ContentContainer>
          <Logo source={require('../../assets/images/logo.png')} />
          <LoginForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            onLoginPress={handleLogin}
          />
          <TouchableOpacity onPress={handleForgotPassword}>
            <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
          </TouchableOpacity>
        </ContentContainer>
      </BackgroundImage>
    </Container>
  );
};

export default Login;
