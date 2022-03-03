import React, { Fragment } from 'react';

import { Container } from './styles';

const Image = ({ image }) => {
  return <Container src={image} />;
};

export default Image;
