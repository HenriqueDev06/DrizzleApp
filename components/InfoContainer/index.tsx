import React, { Fragment } from 'react';

import { Container } from './styles';

import Image from '../Image';
import SearchBar from '../SearchBar';

const InfoContainer = () => {
  return (
    <Container className="display-flex">
      <Image image="https://hpe-developer-portal.s3.amazonaws.com/uploads/media/2019/8/typescriptimage-1568052628959.jpeg" />
      <SearchBar />
      <div className="content display-flex">
        <div className="time-date display-flex">
          <span className="title">7:10 AM</span>
          <span>February, thuerday, 28, 2020</span>
        </div>
        <div className="local display-flex">
          <span className="title">Osasco</span>
          <span>São Paulo</span>
        </div>
      </div>
    </Container>
  );
};

export default InfoContainer;
