import React, {useState} from 'react';
import {View, Text, TextInput, FlatList, Image} from 'react-native';
import {styles} from './style';
import {vendorsData} from '../../components/VendorsCards';
import { IconContainer, SearchContainer, SearchIcon, SearchInput, ShoppingCartIcon, ShoppingCartIconContainer } from '../Portal/style';

const Vendors: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    // Logic to handle search
  };

  const renderVendorItem = ({item}) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Text style={styles.cardSubtitle}>{item.sales} vendas</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <SearchContainer>
        <IconContainer>
          <SearchIcon source={require('../../assets/icons/search-icon.png')} />
        </IconContainer>
        <SearchInput
          value={searchQuery}
          onChangeText={handleSearchChange}
          placeholder="Buscar um fornecedor no Syncfy"
          clearButtonMode="while-editing"
        />
      </SearchContainer>
      <ShoppingCartIconContainer>
        <ShoppingCartIcon
          source={require('../../assets/icons/shopping-cart-icon.png')}
        />
      </ShoppingCartIconContainer>
      <FlatList
        data={vendorsData}
        renderItem={renderVendorItem}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

export default Vendors;
