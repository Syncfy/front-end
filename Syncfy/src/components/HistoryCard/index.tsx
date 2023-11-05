import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HistoryCard = ({order}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>Pedido Nº: {order.number}</Text>
      <Text style={styles.text}>Valor: R$ {order.value.toFixed(2)}</Text>
      <Text style={styles.text}>Quantidade: {order.quantity}</Text>
      <Text style={styles.text}>Fornecedor: {order.vendor}</Text>
      <Text style={styles.text}>Data: {order.date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowColor: '#000',
    shadowOffset: {height: 2, width: 0},
  },
  text: {
    fontSize: 14,
    marginBottom: 4,
  },
});

export default HistoryCard;
