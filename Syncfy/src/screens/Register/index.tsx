import React, {useState} from 'react';
import RegisterForm from '../../components/RegisterForm';
import {
  BackgroundImage,
  Card,
  Container,
  ContentContainer,
  LoginText,
} from './style';

const Register: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    // Lógica de login
  };

  return (
    <Container>
      <BackgroundImage
        source={require('../../assets/images/login-background.png')}>
        <ContentContainer>
          {/* <Logo source={require('../../assets/images/logo.png')} /> */}
          <Card>
            <LoginText>Cadastro</LoginText>
            <RegisterForm
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              onLoginPress={handleLogin}
            />
          </Card>
        </ContentContainer>
      </BackgroundImage>
    </Container>
  );
};

export default Register;
