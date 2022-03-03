import styled from 'styled-components';

export const Container = styled.section`
  width: 100vw;
  height: 100vh;

  background: red;
`;

export const Grid = styled.section`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-rows: 63%;

  .a1{
    background: purple;
    height: 100%;
    width: 100%;
  }

  .b1{
    background: yellow;
    height: 100%;
    width: 100%;
  }
`;
