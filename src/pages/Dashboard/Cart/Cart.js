import styled from 'styled-components';

import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { ProductCart } from '../../../components/Products/ProductCart';
import { EmptyCart } from '../../../components/Cart/EmptyCart';

import { getCarts } from '../../../services/cartsApi';

export function Cart() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const promise = getCarts();
    promise.then((res => {
      setData(res);
    })).catch(()=>{
      alert('An error occurred while trying to fetch the data, please refresh the page');
    });
  }, []);
  //console.log(data.CartProducts[0].Products.name);
  console.log(data);

  /*if (cart === null || cart.length === 0) {
    return (
      <Wrapper>
        <EmptyCart />
      </Wrapper>
    );
  }*/

  return (
    <Wrapper>
      <h1>Seu carrinho</h1>

      <Container>
        <ProductsContainer>
            <ProductCart />
        </ProductsContainer>
      </Container>
      
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 100vw;
  min-height: 60vh;
  padding-top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #adb5bd;
  font-family: 'Raleway', sans-serif; 
  color: #f8f9fa;
  h1 {
    font-size: 2em;
    line-height: 3em;
    font-weight: 500;
  } 
  @media (max-width: 850px) {
    padding-top: 16vh;
  }
`;

const Container = styled.div`
  width: 50%;
  padding-bottom: 30px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 850px) {
    width: 90%;
    flex-direction: column;
    gap: 20px;
  }
`;

const ProductsContainer = styled.div`
  width: 600px;
  padding: 20px;
  border-radius: 5px;
  background-color: #f8f9fa;
  box-shadow: #f8f9fa;  
  
  @media (max-width: 850px) {
    width: auto;
  }
`;
