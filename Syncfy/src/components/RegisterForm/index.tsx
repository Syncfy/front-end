import React, { useState } from 'react';
import { Input } from './style';
import { RegisterButton } from '../RegisterButton';
import CheckboxRegister from "../CheckboxRegister";
import CheckBox from '../CheckboxRegister';

type RegisterFormProps = {
  email: string;
  setEmail: (text: string) => void;
  cnpj: string;
  setCnpj: (text: string) => void;
  password: string;
  setPassword: (text: string) => void;
  confirmPassword: string;
  setConfirmPassword: (text: string) => void;
  onRegisterPress: () => void;
};

const RegisterForm: React.FC<RegisterFormProps> = ({
  email,
  setEmail,
  cnpj,
  setCnpj,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  onRegisterPress,
}) => {
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  const handleRegisterPress = () => {
    onRegisterPress(); 
  };

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
        placeholder="CNPJ"
        value={cnpj}
        onChangeText={setCnpj}
        keyboardType="numeric"
      />
      <Input
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Input
        placeholder="Confirme sua senha"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <CheckBox></CheckBox>
      <RegisterButton onPress={handleRegisterPress} text="Cadastre-se" />
    </>
  );
};

export default RegisterForm;
