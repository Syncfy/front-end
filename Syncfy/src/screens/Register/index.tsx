import React, {useState} from 'react';
import styled from 'styled-components/native';
import LoginForm from '../../components/LoginForm';
import {ImageBackground} from 'react-native';

const Container = styled.View`
  flex: 1;
`;

const ContentContainer = styled.View`
  flex: 1;
  align-items: center;
`;

const BackgroundImage = styled(ImageBackground)`
  flex: 1;
  resizemode: cover;
`;

const Logo = styled.Image`
  width: 120px;
  height: 120px;
`;

const Card = styled.View`
  width: 360px;
  height: 423px;
  border: 2px solid #000000;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 25px;
  shadow-opacity: 0.2;
  shadow-radius: 4px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const LoginText = styled.Text`
  font-size: 40px;
  margin-bottom: 30px;
  text-align: center;
  color: #000000;
`;

const Login: React.FC = () => {
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
          <Logo source={require('../../assets/images/logo.png')} />
          <Card>
            <LoginText>Login</LoginText>
            <LoginForm
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

export default Login;
