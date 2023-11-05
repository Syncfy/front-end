import React, {useState} from 'react';
import {Container, SearchContainer, SearchInput} from './style'; // Import styled components

const Portal: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    // Logic to handle search
  };

  return (
    <Container>
      <SearchContainer>
        <SearchInput
          value={searchQuery}
          onChangeText={handleSearchChange}
          placeholder="Buscar um produto no Syncfy"
          clearButtonMode="while-editing"
        />
      </SearchContainer>
    </Container>
  );
};

export default Portal;
