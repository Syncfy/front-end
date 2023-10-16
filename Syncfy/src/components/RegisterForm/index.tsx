import React from 'react';
import styled from 'styled-components/native';

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
  height: 60px;
  background-color: #820ad1;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  border: 2px solid #000000;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

type LoginButtonProps = {
  onPress: () => void;
  text: string;
};

type RegisterFormProps = {
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

const RegisterForm: React.FC<RegisterFormProps> = ({
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
      <LoginButton onPress={onLoginPress} text="LOG IN" />
    </>
  );
};

export default RegisterForm;
