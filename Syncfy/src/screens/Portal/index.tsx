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
import { KeyboardAvoidingView, Platform, ScrollView, View, FlatList, Image, Text, ActivityIndicator, TextInput, Modal } from 'react-native';
import { SearchButton } from '../../components/SearchButton';
import Toast from 'react-native-toast-message';
import { carouselData } from '../../components/PortalCarolseu';
import { styless } from '../../components/PortalCarolseu/style';
import { StackNavigationProp } from '@react-navigation/stack';
import axios from 'axios';
import { RootStackParamList } from '../../types/rock-stack-param-list';

type RegisterScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Portal'
>;

type Props = {
  navigation: RegisterScreenNavigationProp;
};

const Portal: React.FC<Props> = ({ navigation }) => {
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
    const url = `https://7654-187-51-16-18.ngrok-free.app/busca?query=${encodeURIComponent(searchQuery)}`;
    console.log('Fetching URL:', url);
    try {
      const response = await axios.get(url);
      const data = response.data.produtosEncontrados;
      console.log('Data received:', data);
  
      if (!data || data.length === 0) {
        Toast.show({
          type: 'info',
          text1: 'Nenhum produto encontrado',
          text2: 'Tente buscar por algo diferente.',
        });
        setProducts([]);
      } else {
        navigation.navigate('Pesquisa', { products: data });
      }
    } catch (error: any) {
      console.error('Erro ao buscar produtos:', error);
      Toast.show({
        type: 'error',
        text1: 'Erro ao buscar',
        text2: `Não foi possível realizar a busca: ${error.message}`,
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
              onSubmitEditing={handleSearch} // Adicionado para lidar com o "enter" no teclado
              returnKeyType="search" // Muda o botão "enter" para "search"
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
          {loading && (
  <Modal transparent={true} animationType="none">
    <View style={styles.loadingOverlay}>
      <ActivityIndicator size="large" color="#52d974" />
      <Text style={styles.loadingText}>Pesquisando...</Text>
    </View>
  </Modal>
)}
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
          <SearchButton text="Buscar produto" onPress={handleSearch} />
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Portal;
