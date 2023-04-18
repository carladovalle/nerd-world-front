import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { useRef } from 'react';
import useProducts from '../../hooks/api/useProducts';
import Product from '../Products/Product';

export function BestSellers() {

  const [products, setProducts] = useState([]);


  const { getProducts } = useProducts();

  useEffect(async () => {
    const data = await getProducts();
    setProducts(data);
  }, []);

  const carousel = useRef(null);
 
  const handleLeftClick = (e) => {
    e.preventDefault();
    if (carousel.current !== null) {
      carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    if (carousel.current !== null) {
      carousel.current.scrollLeft += carousel.current.offsetWidth;
    }
  };

  return(
    <Wrapper>
      <h1>Mais vendidos</h1>
      <ProductsBrowser>
        <BsChevronLeft className="scroll" onClick={handleLeftClick}/>
        <Carousel ref={carousel}>
          {products ? (
            products?.map((product, index) => (
              <Product
                key={index}
                index={index}
                name={product.name}
                image={product.image}
              />
            ))
          ) : (
            <></>
          )}
        </Carousel>
        <BsChevronRight className="scroll" onClick={handleRightClick}/>
      </ProductsBrowser>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 5vh 0;
  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-family: 'Raleway', sans-serif;
  h1 {
    font-size: 2em;
    line-height: 3em;
    font-weight: 500;
    color: #495057;
  }
`;

const ProductsBrowser = styled.div`
  display: flex;
  flex-direction: row;
  gap: 19px;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  flex-wrap: wrap;
`;

const Carousel = styled.div`
  margin: 0 10px;
  overflow-x: hidden;
  scroll-behavior: smooth;
  display: flex;
  
  @media (max-width: 600px) {
      width: 90%;
      margin: 0 10px;
  }
`;