import React from 'react';
import { render } from 'react-dom';
import './styles/globalStyles.css';

import App from './app';
import { ThemeProvider } from 'styled-components';
import { LightTheme } from './themes';

render(
  <ThemeProvider theme={LightTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
