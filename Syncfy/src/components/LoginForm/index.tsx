import React from 'react';
import styled from 'styled-components/native';

const Input = styled.TextInput`
  width: 88%;
  height: 50px;
  border: 2px solid #000000;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
`;

const Button = styled.TouchableOpacity`
  width: 88%;
  height: 56px;
  background-color: #52d974;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

type LoginButtonProps = {
  onPress: () => void;
  text: string;
};

type LoginFormProps = {
  email: string;
  setEmail: (text: string) => void;
  password: string;
  setPassword: (text: string) => void;
  onLoginPress: () => void;
};

const LoginButton: React.FC<LoginButtonProps> = ({onPress, text}) => {
  return (
    <Button onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </Button>
  );
};

const LoginForm: React.FC<LoginFormProps> = ({
  email,
  setEmail,
  password,
  setPassword,
  onLoginPress,
}) => {
  return (
    <>
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <Input
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <LoginButton onPress={onLoginPress} text="Login" />
    </>
  );
};

export default LoginForm;
