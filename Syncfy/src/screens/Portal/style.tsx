import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const SearchContainer = styled.View`
  padding: 10px;
  background-color: #52d974;
  border-bottom-width: 1px;
  border-color: #e4e4e4;
  flex-direction: row;
  align-items: center;
`;

export const SearchInput = styled.TextInput.attrs(() => ({
  placeholderTextColor: 'gray',
}))`
  background-color: #ffffff;
  padding-horizontal: 40px;
  padding-vertical: 8px;
  border-radius: 22px;
  font-size: 16px;
  flex: 1;
  margin-right: 26px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 2px;
  elevation: 2;
`;

export const IconContainer = styled.View`
  position: absolute;
  left: 22px;
  z-index: 1;
`;

export const SearchIcon = styled.Image`
  width: 18px;
  height: 18px;
`;

export const ShoppingCartIconContainer = styled.View`
  position: absolute;
  right: 9px;
  top: 21px;
  z-index: 1;
`;

export const ShoppingCartIcon = styled.Image`
  width: 22px;
  height: 22px;
`;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  titleImage: {
    width: '100%',
    height: 130,
    resizeMode: 'cover',
    borderRadius: 12,
  },
});
