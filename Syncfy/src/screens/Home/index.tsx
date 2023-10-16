import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const Logo = styled.Image`
  width: 200px;
  height: 200px;
  margin-top: 50px;
`;

const WelcomeText = styled.Text`
  font-size: 32px;
  font-weight: bold;
  margin-top: 20px;
  text-align: center;
  color: #000000;
`;

const SubText = styled.Text`
  font-size: 20px;
  color: #555;
  margin-top: 10px;
  text-align: center;
`;

const LoginButton = styled.TouchableOpacity`
  width: 40%;
  height: 60px;
  background-color: #820ad1;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

const RegisterButton = styled.TouchableOpacity`
  width: 40%;
  height: 60px;
  background-color: #820ad1;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

const ButtonText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;

const Home = ({navigation}) => {
  //Arrumar tipagem de "navigation".
  return (
    <Container>
      <Logo source={require('../../assets/images/logo.png')} />
      <WelcomeText>Seja bem-vindo!</WelcomeText>
      <SubText>Procedência e segurança é com a gente.</SubText>
      <LoginButton
        onPress={() => {
          navigation.navigate('Login');
        }}>
        <ButtonText>Login</ButtonText>
      </LoginButton>
      <RegisterButton
        onPress={() => {
          navigation.navigate('Cadastro');
        }}>
        <ButtonText>Cadastro</ButtonText>
      </RegisterButton>
    </Container>
  );
};

export default Home;
