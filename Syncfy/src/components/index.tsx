import React from 'react';
import styled from 'styled-components/native';

// Tipos dos componentes e props
const Input = styled.TextInput`
  width: 100%;
  height: 50px;
  border: 2px solid #000000;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
`;

const Button = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  background-color: #820ad1;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

// Tipos das props para LoginButton e LoginForm
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
      <LoginButton onPress={onLoginPress} text="Entrar" />
    </>
  );
};

export default LoginForm;
