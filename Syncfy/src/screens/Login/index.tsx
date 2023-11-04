import React, {useState} from 'react';
import LoginForm from '../../components/LoginForm';
import {TouchableOpacity} from 'react-native';
import {
  Container,
  ContentContainer,
  BackgroundImage,
  Logo,
  ForgotPasswordText,
} from './style';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    // Lógica de login
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
