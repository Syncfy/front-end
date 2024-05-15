import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const Results = () => {
  const route = useRoute();
  const { products } = route.params;

  const renderProductItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Text style={styles.cardSubtitle}>{`Preço: ${item.actual_price}`}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={item => item.link}
      />
    </View>
  );
};

export default Results;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    margin: 5,
    flex: 1,
    alignItems: 'center'
  },
  cardImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain'
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5
  },
  cardSubtitle: {
    fontSize: 14,
    color: 'grey'
  }
});
