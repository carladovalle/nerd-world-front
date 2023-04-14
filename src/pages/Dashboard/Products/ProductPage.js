import styled from 'styled-components';

import { useLocation } from 'react-router-dom';

export function ProductPage() {
  const { product } =  useLocation().state;
  
  return (
    <Wrapper>
      <Image image={product.image}></Image>

      <Description>
        <h1>{product.name}</h1>
        <P>{product.description}</P>
        <Price>${product.price}</Price>
        <Button>Buy Now</Button>
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
  @media (max-width: 850px) {
    width: 100%;
    padding: 20px;
  }
`;

const h1 = styled.h1`
  text-align: center;
  font-size: 2em;
  line-height: 2em;
  font-weight: 500;
  @media (max-width: 850px) {
    line-height: 1;
  }
`;

const P = styled.p`
  margin-top: 20px;
  font-size: 1.2em;
  line-height: 1.2em;
`;

const Price = styled.span`
  padding: 20px 0;
  font-size: 3em;
  font-weight: 500;
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
  background-image: linear-gradient( to right, #083316, #76C352);
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