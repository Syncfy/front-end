import React, {useState} from 'react';
import {
  Container,
  SearchContainer,
  SearchInput,
  IconContainer,
  SearchIcon,
  ShoppingCartIconContainer,
  ShoppingCartIcon,
  styles,
} from './style';
import {View} from 'react-native';
import {Image} from 'react-native';

const Portal: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    // Logic to handle search
  };

  return (
    <Container>
      <SearchContainer>
        <IconContainer>
          <SearchIcon source={require('../../assets/icons/search-icon.png')} />
        </IconContainer>
        <SearchInput
          value={searchQuery}
          onChangeText={handleSearchChange}
          placeholder="Buscar um produto no Syncfy"
          clearButtonMode="while-editing"
        />
      </SearchContainer>
      <ShoppingCartIconContainer>
        <ShoppingCartIcon
          source={require('../../assets/icons/shopping-cart-icon.png')}
        />
      </ShoppingCartIconContainer>
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/Syncfy.png')}
          style={styles.titleImage}
        />
      </View>
    </Container>
  );
};

export default Portal;
