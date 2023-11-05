// History.js
import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import HistoryCard from '../../components/HistoryCard';

const historyData = [
  {
    number: '001',
    value: 1500.0,
    quantity: 10,
    vendor: 'Fornecedor A',
    date: '10/01/2023',
  },
  {
    number: '002',
    value: 2500.0,
    quantity: 20,
    vendor: 'Fornecedor B',
    date: '12/01/2023',
  },
];

const HistoryPage = () => {
  return (
    <ScrollView style={styles.container}>
      {historyData.map((order, index) => (
        <HistoryCard key={index} order={order} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 16,
  },
});

export default HistoryPage;
