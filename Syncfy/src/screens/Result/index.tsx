import React, { useState } from 'react';
import {
  View, Text, FlatList, Image, StyleSheet, TextInput, ScrollView,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { IconContainer, SearchContainer, SearchIcon } from './style';

const Pesquisa = () => {
  const route = useRoute();
  const products = route.params?.products || [];

  if (!products.length) {
    return (
      <View style={styles.container}>
        <Text>Nenhum produto encontrado</Text>
      </View>
    );
  }

  const renderProductItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Text style={styles.cardSubtitle}>{`Preço: ${item.actual_price}`}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <SearchContainer>
            <IconContainer>
              <SearchIcon source={require('../../assets/icons/search-icon.png')} />
            </IconContainer>
            <TextInput            
            clearButtonMode="while-editing"
            returnKeyType="search" // Muda o botão "enter" para "search"
            placeholder="Buscar um produto no Syncfy"
              style={{
                flex: 1,
                paddingHorizontal: 40,
                paddingVertical: 8,
                borderRadius: 22,
                fontSize: 16,
                backgroundColor: '#ffffff',
                marginLeft: 1,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 2,
                elevation: 2,
              }}
            />
          </SearchContainer>
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={item => item.link}
      />
    </ScrollView>
  );
};

export default Pesquisa;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    margin: 5,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    padding: 10,
  },
  cardImage: {
    width: '100%',
    height: 160,
    borderRadius: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  cardSubtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#52d974',
    marginTop: 5,
  }
});
