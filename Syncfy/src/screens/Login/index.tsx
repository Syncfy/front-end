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

// const LoginText = styled.Text`
//   font-size: 40px;
//   margin-bottom: 30px;
//   text-align: center;
//   color: #000000;
// `;

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
          {/* <LoginText>Login</LoginText> */}
          <LoginForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            onLoginPress={handleLogin}
          />
        </ContentContainer>
      </BackgroundImage>
    </Container>
  );
};

export default Login;
