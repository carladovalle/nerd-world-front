import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';

export function SearchResults({ products, hidden }) {
  const navigate = useNavigate();

  if (products.length === 0) {
    return (
      <Wrapper hidden={hidden}>
        Procurando...
      </Wrapper>
    );
  }

  return (
    <Wrapper hidden={hidden}>

      <ProductsContainer>
        {
          products.map(product => (
            <Container key={product.id}>
              <Image 
                src={product.image} 
                onClick={() => navigate(`product/${product.id}`, {state: { product: product }})}
              />
              <InfoContainer>
                <div>
                  <H2 onClick={() => navigate(`product/${product.id}`, {state: { product: product }})}>
                    {product.name}
                  </H2>
                  <Span>${product.price/100}</Span>
                </div>
                </InfoContainer>
            </Container>
          ))
        }
      </ProductsContainer>
      
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color:#F5FAD1;
  visibility: ${props => props.hidden ? 'hidden' : 'visible'};
  
  position: absolute;  
  top: 7vh;
`;

const ProductsContainer = styled.div`
  max-height: 50vh;
  gap: 10px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

const Container = styled.div`
  width: 100%;
  gap: 10px;
  display: flex;
  justify-content: start;
`;

const Image = styled.img`
  width: 90px;
  height: 100px;
  border-radius: 5px;
  cursor: pointer;
`;

const H2 = styled.h2`
  font-weight: 500;
  line-height: 20px;
  cursor: pointer;
  :hover{
    font-weight: 600;
  }
`;

const Span = styled.span`
  font-size: 20px;
  font-weight: 500;
`;

const InfoContainer = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Button = styled.button`
  width: 90px;
  height: 30px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 500;
  border: none;
  color: #F5FAD1;
  background-image: linear-gradient( to right, #083316, #76C352);
  cursor: pointer; 
  
  &:hover {
    opacity: .8;
  }
`;