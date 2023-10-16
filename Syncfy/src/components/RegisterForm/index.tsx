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

const CheckboxContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

const Checkbox = styled.View`
  width: 20px;
  height: 20px;
  border: 2px solid #000;
  border-radius: 5px;
  margin-right: 10px;
`;

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
      <LoginButton onPress={onLoginPress} text="LOG IN" />
    </>
  );
};

export default RegisterForm;
