import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    list-style: none;
    border: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
    width: 100%;
    background: black;
    scroll-behavior: smooth;
  }

  ::-webkit-scrollbar {
    width: 12px;
    height: 4px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #f55838;
    border-radius: 10px;
    border: 3px solid transparent;
  }

  *,
  button,
  input {
    font-family: 'Roboto', sans-sefif;
  }

  .display-flex {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default GlobalStyle;
