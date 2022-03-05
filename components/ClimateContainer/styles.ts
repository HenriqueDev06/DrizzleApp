import styled from 'styled-components';

export const Container = styled.section`
  width: 100vw;
  z-index: 99;

  background: ${(props) => props.theme.background};

  display: grid;
  grid-template-columns: 1.8fr 0.9fr 1.5fr 1fr 1fr 1fr;

  .info-1{
    height: 100%;
    flex-direction: column;

    img{
      height: 100px;
    }
    p{
      width: 100%;
      margin-top: 5px;
      text-align: center;
    }
  }

  .info-2{
    height: 100%;
    width: 100%;
    flex-direction: column;

    span{
      font-weight: 600;
      font-size: 2rem;
      width: inherit;
      margin: 15px 0px;      
    }
  }

  .info-3{
    height: 100%;
    width: 100%;
    flex-direction: column;

    span{
      font-weight: 400;
      font-size: 1.1rem;
      width: inherit;
      margin: 20px 0px;      
    }
  }
`;
