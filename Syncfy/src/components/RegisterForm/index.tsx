import React from 'react';
import { Input } from './style';
import { CadastroButton } from '../CadastroButton';

type CadastroFormProps = {
  email: string;
  setEmail: (text: string) => void;
  cnpj: string;
  setCnpj: (text: string) => void;
  password: string;
  setPassword: (text: string) => void;
  confirmPassword: string;
  setConfirmPassword: (text: string) => void;
  onCadastroPress: () => void;
};

const CadastroForm: React.FC<CadastroFormProps> = ({
  email,
  setEmail,
  cnpj,
  setCnpj,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  onCadastroPress,
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
      <CadastroButton onPress={onCadastroPress} text="Cadastre-se" />
    </>
  );
};

export default CadastroForm;
