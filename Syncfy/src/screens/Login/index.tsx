import React, {useState} from 'react';
import styled from 'styled-components/native';
import LoginForm from '../../components';

const Container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

const Logo = styled.Image`
  width: 150px;
  height: 150px;
`;

const Card = styled.View`
  width: 334px;
  height: 423px;
  border: 1px solid black;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
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
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
`;

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    // Lógica de login
  };

  return (
    <Container>
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
    </Container>
  );
};

export default Login;
