import React, { Fragment } from 'react';

import { Container } from './styles';
import { WiHumidity, WiSunrise, WiCloudy } from 'react-icons/wi';

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
        <span>Térmica</span>
      </div>
      <div className="info display-flex">
        <WiHumidity id="humidity" />
        <p>Umidade</p>
        <span>20</span>
      </div>
      <div className="info display-flex">
        <WiSunrise id="uv" />
        <p>Raios U</p>
        <span>20</span>
      </div>
      <div className="info display-flex">
        <WiCloudy id="cloud" />
        <p>Nuvens</p>
        <span>20</span>
      </div>
    </Container>
  );
};

export default ClimateContainer;
