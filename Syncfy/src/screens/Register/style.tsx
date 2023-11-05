import styled from 'styled-components/native';
import {ImageBackground} from 'react-native';

export const Container = styled.View`
  flex: 1;
`;

export const ContentContainer = styled.View`
  flex: 1;
  align-items: center;
`;

export const BackgroundImage = styled(ImageBackground)`
  flex: 1;
  resizemode: cover;
`;

export const Logo = styled.Image`
  width: 120px;
  height: 120px;
`;

export const Card = styled.View`
  width: 330px;
  height: 385px;
  border: 2px solid #000000;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 25px;
  shadow-opacity: 0.2;
  shadow-radius: 4px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const LoginText = styled.Text`
  font-size: 40px;
  margin-bottom: 370px;
  text-align: center;
  color: #000000;
`;
