// History.js
import React, { useState } from 'react';
import {ScrollView, View } from 'react-native';
import {styles, historyData} from './style';
import HistoryCard from '../../components/HistoryCard';
import { IconContainer, SearchContainer, SearchIcon, SearchInput, ShoppingCartIcon, ShoppingCartIconContainer } from '../Portal/style';

const HistoryPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearchChange = (query: string) => {
      setSearchQuery(query);
      // Logic to handle search
  };

  return (
    <View style={styles.container}>
      <SearchContainer>
        <IconContainer>
          <SearchIcon source={require('../../assets/icons/search-icon.png')} />
        </IconContainer>
        <SearchInput
          value={searchQuery}
          onChangeText={handleSearchChange}
          placeholder="Buscar um pedido no Syncfy"
          clearButtonMode="while-editing"
        />
      </SearchContainer>
      <ShoppingCartIconContainer>
        <ShoppingCartIcon
          source={require('../../assets/icons/shopping-cart-icon.png')}
        />
      </ShoppingCartIconContainer>
      {/*  Título de histórico removido
      <Image
        source={require('../../assets/images/history-green-title.png')}
        style={styles.titleImage}
      /> */}
      <ScrollView style={styles.container}>
        {historyData.map((order, index) => (
          <HistoryCard key={index.toString()} order={order} />
        ))}
      </ScrollView>
    </View>
  );
};

export default HistoryPage;
