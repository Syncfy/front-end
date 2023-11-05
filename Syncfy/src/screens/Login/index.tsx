import React, {useState} from 'react';
import LoginForm from '../../components/LoginForm';
import {TouchableOpacity} from 'react-native';
import {
  Container,
  ContentContainer,
  BackgroundImage,
  Logo,
  ForgotPasswordText,
} from './style';
import Toast from 'react-native-toast-message';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = () => {
    if (loading) return;

    // Simples validações
    if (!email || !password) {
      Toast.show({
        type: 'error',
        text1: 'Erro',
        text2: 'Por favor, insira e-mail e senha.',
      });
      return;
    }

    // Aqui você adicionaria sua lógica de autenticação com o backend
    setLoading(true);
    // Simulação de chamada de API
    setTimeout(() => {
      setLoading(false);
      // Isto é onde você colocaria a resposta da API
      const success = true; // ou false, baseado na resposta da API

      if (success) {
        Toast.show({
          type: 'success',
          text1: 'Sucesso',
          text2: 'Login realizado com sucesso!',
        });
        // navigate to home screen or dashboard
      } else {
        Toast.show({
          type: 'error',
          text1: 'Erro',
          text2: 'Credenciais inválidas ou erro de servidor.',
        });
      }
    }, 2000);
  };

  const handleForgotPassword = () => {
    // Lógica para esqueci minha senha
    console.log('Usuário clicou em "Esqueci minha senha"');
  };

  return (
    <Container>
      <BackgroundImage
        source={require('../../assets/images/white-background.png')}>
        <ContentContainer>
          <Logo source={require('../../assets/images/logo.png')} />
          <LoginForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            onLoginPress={handleLogin}
          />
          <TouchableOpacity onPress={handleForgotPassword}>
            <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
          </TouchableOpacity>
        </ContentContainer>
      </BackgroundImage>
    </Container>
  );
};

export default Login;
