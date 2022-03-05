import React, { Fragment } from 'react';

import { Container, Grid } from './styles';

import InfoContainer from '../../components/InfoContainer';
import ClimateContainer from '../../components/ClimateContainer';

const Home = () => {
  return (
    <Container>
      <Grid>
        <InfoContainer />
        <ClimateContainer />
      </Grid>
    </Container>
  );
};

export default Home;
