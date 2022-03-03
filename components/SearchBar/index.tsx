import React from 'react';

import { Container } from './styles';

const SearchBar = () => {
  return (
    <Container>
      <input placeholder='São Paulo'/>
      <button>P</button>
    </Container>
  );
};

export default SearchBar;
