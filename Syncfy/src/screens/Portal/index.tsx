import React, { useState } from 'react';
import {
  Container,
  SearchContainer,
  IconContainer,
  SearchIcon,
  styles,
  WelcomeText,
  WelcomeName,
  Categories,
} from './style';
import { KeyboardAvoidingView, Platform, ScrollView, View, FlatList, Image, Text, ActivityIndicator } from 'react-native';
import { SearchButton } from '../../components/SearchButton';
import Toast from 'react-native-toast-message';
import { carouselData } from '../../components/PortalCarolseu';
import { styless } from '../../components/PortalCarolseu/style';
import { TextInput } from 'react-native';

const Portal: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const handleSearch = async () => {
    if (searchQuery.trim() === '') {
      Toast.show({
        type: 'error',
        text1: 'Erro',
        text2: 'Digite algo para buscar.',
      });
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`https://api.yoursite.com/products?query=${encodeURIComponent(searchQuery)}`);
      const data = await response.json();

      if (data.length === 0) {
        Toast.show({
          type: 'info',
          text1: 'Nenhum produto encontrado',
          text2: 'Tente buscar por algo diferente.',
        });
        setProducts([]);
      } else {
        setProducts(data);
      }
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      Toast.show({
        type: 'error',
        text1: 'Erro ao buscar',
        text2: 'Não foi possível realizar a busca.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView>
        <Container>
          <SearchContainer>
            <IconContainer>
              <SearchIcon source={require('../../assets/icons/search-icon.png')} />
            </IconContainer>
            <TextInput
              value={searchQuery}
              onChangeText={handleSearchChange}
              placeholder="Buscar um produto no Syncfy"
              clearButtonMode="while-editing"
              onSubmitEditing={handleSearch}  // Adicionado para lidar com o "enter" no teclado
              returnKeyType="search"  // Muda o botão "enter" para "search"
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
          <WelcomeText>
            Bem vindo, <WelcomeName>Victor</WelcomeName>
          </WelcomeText>
          <View style={styles.container}>
            <Image
              source={require('../../assets/images/utils/banner-syncfy.png')}
              style={styles.titleImage}
            />
          </View>
          <Categories> Categorias </Categories>
          <FlatList
            data={carouselData}
            renderItem={({ item }) => (
              <View style={styless.carouselItem}>
                <Image source={item.image} style={styless.carouselImage} />
                <Text style={styless.carouselTitle}>{item.title}</Text>
                <Text style={styless.carouselDescription}>{item.description}</Text>
              </View>
            )}
            keyExtractor={item => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToAlignment="center"
            pagingEnabled
          />
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            products.length > 0 && (
              <FlatList
                data={products}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
                    <Text style={{ fontSize: 18 }}>{item.name}</Text>
                    <Text>{item.description}</Text>
                  </View>
                )}
              />
            )
          )}
          <SearchButton text="Buscar produto"/>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Portal;
