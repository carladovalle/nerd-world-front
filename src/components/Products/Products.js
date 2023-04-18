import styled from 'styled-components';
import { BsPlusCircle } from 'react-icons/bs';
import { useNavigate  } from 'react-router-dom';

export function Product({ product }) {
  const navigate = useNavigate();

  return (
    <ProductCard >
      <img 
        src={product.image} alt="" 
        onClick={() => navigate(`/dashboard/product/${product.id}`, {state: { product: product }})}
      />
      <p onClick={() => navigate(`/dashboard/product/${product.id}`, {state: { product: product }})}>
        {product.name}
      </p>
      <div>
        <span>R$ {product.price/100}</span>
        <BsPlusCircle className='plus'/>
      </div>
    </ProductCard>
  );
}

const ProductCard = styled.div`
  width: 220px;
  height: 300px;
  margin: 20px 10px;
  display: flex;
  flex: none;
  flex-direction: column;
  justify-content: space-between;
  background-color: #6c757d;
  border-radius: 10px;
  transition: all 250ms;
  position: relative;
  img {
    width: 100%;
    height: 225px;
    padding: 8px;
    object-fit: cover;
    border-radius: 3px;
    cursor: pointer;
    :hover {
      filter: brightness(1.1);
    }
    :active {
      transform: scale(0.98);
    }
  }
  p {
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    color: #f8f9fa;
    cursor: pointer;
    :hover {
      font-weight: 700;
    }
  }
  >div {
    width: 100%;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #f8f9fa;
    span {
      font-size: 18px;
    }
    .plus {
      font-size: 22px;
      cursor: pointer;
      :hover {
        color: #76C352;
      }
      :active {
        transform: scale(0.98);
      }
    }
  }
`;
