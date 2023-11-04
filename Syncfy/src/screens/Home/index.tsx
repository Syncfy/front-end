import React from 'react';
import {
  Button,
  ButtonContainer,
  ButtonText,
  Container,
  Logo,
  SubText,
  WelcomeText,
} from './style';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Cadastro: undefined;
  // outros nomes de tela podem ser adicionados aqui
};

type HomeNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeNavigationProp;
};

const Home: React.FC<Props> = ({navigation}) => {
  return (
    <Container>
      <Logo source={require('../../assets/images/logo.png')} />
      <WelcomeText>Seja bem-vindo!</WelcomeText>
      <SubText>Procedência e segurança é com a gente.</SubText>
      <ButtonContainer>
        <Button
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <ButtonText>Login</ButtonText>
        </Button>
        <Button
          onPress={() => {
            navigation.navigate('Cadastro');
          }}>
          <ButtonText>Cadastro</ButtonText>
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Home;
