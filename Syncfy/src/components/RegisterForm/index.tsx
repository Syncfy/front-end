import React from 'react';
import styled from 'styled-components/native';
import {Button, ButtonText, Checkbox, CheckboxContainer, Input} from './style';

const Label = styled.Text`
  font-size: 16px;
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
  cnpj: string;
  setCnpj: (text: string) => void;
  phone: string;
  setPhone: (text: string) => void;
  agreeToTerms: boolean;
  setAgreeToTerms: (value: boolean) => void;
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
  cnpj,
  setCnpj,
  phone,
  setPhone,
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
      <Input placeholder="CNPJ" value={cnpj} onChangeText={setCnpj} />
      <Input
        placeholder="Telefone"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <CheckboxContainer>
        <Checkbox />
        <Label>I agree to the terms and conditions</Label>
      </CheckboxContainer>
      <LoginButton onPress={onLoginPress} text="CADASTRAR" />
    </>
  );
};

export default RegisterForm;
