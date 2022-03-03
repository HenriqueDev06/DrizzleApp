import React from 'react';
import { FiSearch } from 'react-icons/fi';

import { Container } from './styles';

const SearchBar = () => {
  return (
    <Container>
      <input placeholder="São Paulo" />
      <button>
        <FiSearch />
      </button>
    </Container>
  );
};

export default SearchBar;
