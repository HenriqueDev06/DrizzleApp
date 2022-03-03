import styled from 'styled-components';

export const Container = styled.section`
  width: 100vw;
  position: relative;

  .content{
    width: 100%;
    margin-top: 10%;
    padding: 0px 40px;
    z-index: 1;

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

    .title{
      font-weight: 500;
      font-size: 2.2rem;
    }
  }
`;
