import React, { useState } from 'react';
import CadastroForm from '../../components/RegisterForm';
import { Container, ContentContainer, BackgroundImage, Logo } from './style';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/rock-stack-param-list';
import { Alert } from 'react-native';


type CadastroScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Cadastro'>;

type Props = {
  navigation: CadastroScreenNavigationProp;
};

const Cadastro: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [cnpj, setCnpj] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleCadastro = () => {
    if (loading) {
      return;
    }

    // Validações
    if (!email || !password || !confirmPassword || !cnpj) {
      Alert.alert('Erro', 'Todos os campos são obrigatórios.');
      return;
    }
  
    if (!email.includes('@')) {
      Alert.alert('Erro', 'O email deve conter @.');
      return;
    }
  
    if (cnpj.length !== 14) {
      Alert.alert('Erro', 'O CNPJ deve ter 14 dígitos.');
      return;
    }
  
    if (password !== confirmPassword) {
      Alert.alert('Erro', 'A senha e a confirmação de senha devem ser iguais.');
      return;
    }

  };
  return (
    <Container>
      <BackgroundImage source={require('../../assets/images/white-background.png')}>
        <ContentContainer>
          <Logo source={require('../../assets/images/logo.png')} />
          <CadastroForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            cnpj={cnpj}
            setCnpj={setCnpj}
            onCadastroPress={handleCadastro}
          />
        </ContentContainer>
      </BackgroundImage>
    </Container>
  );
};

export default Cadastro;
