import styled from 'styled-components/native';

export const Input = styled.TextInput`
  width: 100%;
  height: 50px;
  border: 2px solid #000000;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  margin-top: 30px;
  background-color: #820ad1;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  border: 2px solid #000000;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const CheckboxContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 60px;
`;

export const Checkbox = styled.View`
  width: 20px;
  height: 20px;
  border: 2px solid #000;
  border-radius: 5px;
  margin-right: 10px;
`;
