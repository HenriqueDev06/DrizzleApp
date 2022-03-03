import React, { Fragment } from 'react';

import { Container } from './styles';

import Image from '../Image';
import SearchBar from '../SearchBar';

const InfoContainer = () => {
  return (
    <Container className="display-flex">
      <Image image="https://i.redd.it/84yls3nv4ei81.jpg" />
      <SearchBar />
      <div className="content display-flex">
        <div className="info time-date display-flex">
          <span className="title">7:10 AM</span>
          <span>February, thuerday, 28, 2020</span>
        </div>
        <div className="info local display-flex">
          <span className="title">Osasco</span>
          <span>São Paulo</span>
        </div>
      </div>
    </Container>
  );
};

export default InfoContainer;
