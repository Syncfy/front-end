import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export const Logo = styled.Image`
  width: 200px;
  height: 200px;
  margin-top: 50px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  margin-top: 180px;
`;

export const WelcomeText = styled.Text`
  font-size: 32px;
  font-weight: bold;
  margin-top: 20px;
  text-align: center;
  color: #000000;
`;

export const SubText = styled.Text`
  font-size: 20px;
  color: #555;
  margin-top: 20px;
  text-align: center;
`;

export const Button = styled.TouchableOpacity`
  width: 48%;
  height: 60px;
  background-color: #52d974;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;
