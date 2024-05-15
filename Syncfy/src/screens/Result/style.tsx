import styled from 'styled-components/native';

import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 16,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '48%', // Ajuste a largura conforme necessário
    aspectRatio: 1, // Mantém a proporção quadrada independente da largura
    borderRadius: 8,
    elevation: 1, // Sombra para Android
    // Sombra para iOS:
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowColor: '#000',
    shadowOffset: {height: 2, width: 0},
    padding: 8,
  },
  cardImage: {
    width: '100%',
    height: '70%', // Ajuste conforme necessário
    borderRadius: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    color: 'gray',
  },
});


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
  margin-right: 1px;
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
