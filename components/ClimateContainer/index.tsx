import React, { Fragment } from 'react';

import { Container } from './styles';

const ClimateContainer = () => {
  return (
    <Container>
      <div className="info-1 display-flex">
        <img src="https://www.freeiconspng.com/thumbs/cloud-icon/cloud-icon-22.png" />
        <p>Nevoeiro</p>
      </div>
      <div className="info-2 display-flex">
        <span>26c</span>
        <span>28c</span>
      </div>
      <div className="info-3 display-flex">
        <span>Temperatura</span>
        <span>Sensação Térmica</span>
      </div>
    </Container>
  );
};

export default ClimateContainer;
