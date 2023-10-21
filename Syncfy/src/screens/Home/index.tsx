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

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  margin-top: 180px;
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
  margin-top: 20px;
  text-align: center;
`;
const LoginButton = styled.TouchableOpacity`
  width: 48%;
  height: 60px;
  background-color: #820ad1;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;

const Home = ({navigation}) => {
  return (
    <Container>
      <Logo source={require('../../assets/images/logo.png')} />
      <WelcomeText>Seja bem-vindo!</WelcomeText>
      <SubText>Procedência e segurança é com a gente.</SubText>
      <ButtonContainer>
        <LoginButton
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <ButtonText>Login</ButtonText>
        </LoginButton>
        <LoginButton
          onPress={() => {
            navigation.navigate('Cadastro');
          }}>
          <ButtonText>Cadastro</ButtonText>
        </LoginButton>
      </ButtonContainer>
    </Container>
  );
};

export default Home;
