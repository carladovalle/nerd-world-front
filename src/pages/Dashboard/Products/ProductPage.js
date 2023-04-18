import styled from 'styled-components';

import { useLocation } from 'react-router-dom';

export function ProductPage() {
  const { product } =  useLocation().state;
  
  return (
    <Wrapper>
      <Image image={product.image}></Image>

      <Description>
        <H1>{product.name}</H1>
        <P>{product.description}</P>
        <Price>R$ {product.price/100}</Price>
        <Button>Eu quero</Button>
      </Description>      
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 20px 60px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 850px) {
    padding: 0;
    flex-direction: column;
  }
`;

const Description = styled.div`
  width: 50vw;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 850px) {
    width: 100%;
    padding: 20px;
  }
`;

const H1 = styled.h1`
  text-align: center;
  font-size: 2em;
  line-height: 2em;
  font-weight: 700;
  @media (max-width: 850px) {
    line-height: 1;
  }
`;

const P = styled.p`
  margin-top: 20px;
  font-size: 1.0em;
  line-height: 1.2em;
`;

const Price = styled.span`
  padding: 20px 0;
  font-size: 1em;
  font-weight: 400;
`;

const Button = styled.button`
  width: 200px;
  height: 30px;
  margin-top: 10px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 500;
  border: none;
  font-family: 'Raleway', sans-serif;
  background-image: linear-gradient( to right, #495057, #ced4da);
  cursor: pointer; 
  
  &:hover {
      opacity: .8;
  }
  @media (max-width: 850px) {
    width: 100%;
  }
`;

const Image = styled.div`
  width: 40vw;
  height: 70vh;
  border-radius: 20px;
  
  background-image: url(${props => props.image});
  background-position: center;
  background-size: cover;
  @media (max-width: 850px) {
    width: 100%;
    height: 60vh;
    border-bottom-right-radius: 40%;
  }
`;