import styled from 'styled-components';

export const Container = styled.section`
  width: 100vw;
  position: relative;
  flex-direction: column;
  justify-content: flex-start !important;

  .content{
    width: 100%;
    margin-top: 10%;
    padding: 0px 40px;
    z-index: 1;

    color: white;

    justify-content: space-between !important;
    align-items: flex-start !important;

    .time-date{
      flex-direction: column;
      align-items: flex-start !important;
    }

    .local{
      flex-direction: column;
      align-items: flex-end !important;
    }

    .info{

      transition: 0.5s;
      padding: 5px 10px;
      border-radius: 3px;

      :hover{
        background: rgba(0,0,0,.4)
      }
    }

    .title{
      font-weight: 500;
      font-size: 2.2rem;
    }
  }
`;
