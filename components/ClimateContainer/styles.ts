import styled from 'styled-components';

export const Container = styled.section`
  width: 100vw;
  z-index: 99;

  background: ${(props) => props.theme.background};

  display: grid;
  grid-template-columns: 1.5fr auto auto 1fr 1fr 1fr;

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
    padding: 0px 15px;

    span{
      font-weight: 600;
      font-size: 2rem;
      width: inherit;
      margin: 15px 0px;      
    }
  }

  .info-3{
    height: 100%;
    flex-direction: column;

    span{
      font-weight: 400;
      font-size: 1.1rem;
      width: 100%;
      text-align: start;
      margin: 20px 0px;      
    }
  }

  .info{
    height: 100%;
    flex-direction: column;
    margin-left: 20px;

    svg{
      font-size: 2.5rem;
      padding: 7px;
    }

    span{
      font-weight: 400;
      font-size: 1.1rem;
      margin: 20px 0px;      
    }

    p{
      font-size: 0.8rem;
    }
  }

  #humidity{
    background: linear-gradient(45deg, #72f594, #32e750);
    border-radius: 50%;

    fill: #04c43d;
    
  }

  #uv{
    background: linear-gradient(45deg, #fc9865, #ff7f3d);
    border-radius: 50%;

    fill: #e6560b;
    
  }

  #cloud{
    background: linear-gradient(45deg, #7eb5f7, #2c87f5);
    border-radius: 50%;

    fill: 
    #0c54ab
    ;
    
  }
`;
