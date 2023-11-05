// Portal.tsx
import React, {useState} from 'react';
import {SafeAreaView, TextInput, StyleSheet, View} from 'react-native';

const Portal: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    // Aqui você pode adicionar a lógica para buscar ou filtrar os dados com base no texto inserido
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={handleSearchChange}
          placeholder="Buscar um produto no Syncfy"
          clearButtonMode="while-editing"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#e4e4e4',
  },
  searchInput: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
});

export default Portal;
