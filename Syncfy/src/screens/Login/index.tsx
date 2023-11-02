import React, {useState} from 'react';
import styled from 'styled-components/native';
import LoginForm from '../../components/LoginForm';
import {ImageBackground, TouchableOpacity} from 'react-native';

const Container = styled.View`
  flex: 1;
`;

const ContentContainer = styled.View`
  flex: 1;
  align-items: center;
  padding: 20px;
`;

const BackgroundImage = styled(ImageBackground)`
  flex: 1;
  resizemode: cover;
`;

const Logo = styled.Image`
  width: 180px;
  height: 180px;
  margin-bottom: 40px;
`;

const LoginText = styled.Text`
  font-size: 40px;
  margin-bottom: 20px;
  text-align: center;
  color: #52d974;
  font-family: popps;
`;

const ForgotPasswordText = styled.Text`
  color: #52d974;
  margin-top: 20px;
  text-decoration: underline;
`;

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    // Lógica de login
  };

  const handleForgotPassword = () => {
    // Aqui você pode adicionar a lógica para redirecionar o usuário para a tela de recuperação de senha
    console.log('Usuário clicou em "Esqueci minha senha"');
  };

  return (
    <Container>
      <BackgroundImage
        source={require('../../assets/images/white-background.png')}>
        <ContentContainer>
          <Logo source={require('../../assets/images/logo.png')} />
          <LoginText>Login</LoginText>
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
