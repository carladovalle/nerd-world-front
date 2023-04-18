import styled from 'styled-components';
import { BsCheckCircle } from 'react-icons/bs';

export function Success() {

  return (
    <Wrapper>
      <Check />
      <h1>Seu pedido foi confirmado</h1>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 70vh;
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Raleway', sans-serif; 
  font-weight: 400;
  background-color: #f8f9fa;
  
  h1, h2 {
    padding: 8px;
    color: #495057;
  }
  h1 {
    font-size: 30px;
  }
  h2 {
    font-size: 20px;
  }
`;

const Check = styled(BsCheckCircle)`
  font-size: 92px;
  color: #495057;
  padding: 8px;
`;