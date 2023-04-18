import styled from 'styled-components';
import { BsCart } from 'react-icons/bs';

export function EmptyCart() {


  return (
    <>
      <Cart className='icon'/>
      <h1>Seu carrinho está vazio :( </h1>
    </>
  );
}

const Cart = styled(BsCart)`
  font-size: 5em;
  font-weight: bold;
  margin-bottom: 20px;
`;

const h1 = styled.h2`
  font-size: 1.5em;
  line-height: 20px;
  font-weight: 500;
  margin-bottom: 10px;
`;
