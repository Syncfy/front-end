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
  WelcomeText,
  WelcomeName,
} from './style';
import {View, Image} from 'react-native';

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
      <WelcomeText>
        Bem vindo, <WelcomeName>Victor</WelcomeName>
      </WelcomeText>
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/banner-syncfy.png')}
          style={styles.titleImage}
        />
      </View>
    </Container>
  );
};

export default Portal;
