import styled from 'styled-components';

import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { Product } from '../../../components/Products/Products';

import { getProductsByType } from '../../../services/productsApi';

export function Products () {
  const params = useParams();
  const typeId = params.typeId;

  const { name } =  useLocation().state;

  const [data, setData] = useState([]);

  useEffect(() => {
    const promise = getProductsByType(typeId);
    promise.then((res => {
      setData(res);
    })).catch(()=>{
      alert('An error occurred while trying to fetch the data, please refresh the page');
    });
  }, [typeId]);
  console.log(data);

  return (
    <>
      <h1>{name}</h1>
      {
        data.length === 0 ?
          <h2>Em breve.</h2>
          :
          <Container>
            {
              data.map(product => (
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

const h1 = styled.h1`
  margin-top: 35px;
  text-align: center;
  font-size: 2em;
  line-height: 2em;
  font-weight: 500;
  color: #FF724C;
`;

const h2 = styled.h2`
  text-align: center;
  font-size: 18px;
  color: #FF724C;
`;

const Container = styled.div`
  width: 55%;
  align-self: center;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;