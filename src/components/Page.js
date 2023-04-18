import styled from 'styled-components';

export default styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 48px;
  @media (max-width: 600px) {
    padding: 0;
  }
`;