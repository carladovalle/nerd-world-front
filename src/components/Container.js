import styled from 'styled-components';

export default styled.div`
  height: 100vh;
  width: 100%;
  border-radius: 20px;
  background-color: #fff;

  display: flex;
  overflow: hidden;
  
  @media (max-width: 600px) {
    border-radius: 0;
    min-height: 100vh;
    height: auto;
    max-height: initial;
    min-width: 100%;
    max-width: initial;
  }
`;