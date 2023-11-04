import React from 'react';
import {Button, ButtonText, Input} from './style';

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
