import styled from 'styled-components';

import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { Product } from '../../../components/Products/Products';

import { getCategoryById } from '../../../services/categoriesApi';

export function Products () {
  const params = useParams();
  const categoryId = params.categoryId;

  const { name } =  useLocation().state;

  const [data, setData] = useState([]);

   useEffect(() => {
      const promise = getCategoryById(categoryId);
      promise.then((res => {
        setData(res);
      })).catch(()=>{
        alert('An error occurred while trying to fetch the data, please refresh the page');
      });
    }, [categoryId]);
    console.log(data);

  return (
    <>
      <H1>{name}</H1>
      {
        data.length === 0 ?
          <H2>Coming soon.</H2>
          :
          <Container>
            {
              data.Products.map(product => (
                <Product 
                  key={product.id}
                  product={product}
                />
              ))
            }
          </Container>
      }
    </>
  );
}

const H1 = styled.h1`
  margin-top: 35px;
  text-align: center;
  font-size: 2em;
  line-height: 2em;
  font-weight: 500;
  color: #FF724C;
`;

const H2 = styled.h2`
  text-align: center;
  font-size: 18px;
  color: #FF724C;
`;

const Container = styled.div`
  width: 95%;
  align-self: center;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;