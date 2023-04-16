import styled from 'styled-components';
import { BsPlusCircle } from 'react-icons/bs';
import { useNavigate  } from 'react-router-dom';

export function Product({ product }) {
  const navigate = useNavigate();

  return (
    <ProductCard 
      soldOut={product.stock === 0 ? true : false}
    >
      <img 
        src={product.image} alt="" 
        onClick={() => navigate(`/dashboard/product/${product.id}`, {state: { product: product }})}
      />
      <p onClick={() => navigate(`/dashboard/product/${product.id}`, {state: { product: product }})}>
        {product.name}
      </p>
      <div>
        <span>$ {product.price/100}</span>
        <BsPlusCircle 
          className='plus'
        />
      </div>

      <SoldOut soldOut={product.stock === 0 ? true : false}>
        <h2> SOLD OUT </h2>
      </SoldOut>
    </ProductCard>
  );
}

const ProductCard = styled.div`
  width: 200px;
  height: 300px;
  margin: 20px 10px;
  display: flex;
  flex: none;
  flex-direction: column;
  justify-content: space-between;
  background-color: #F5FAD1;
  border-radius: 10px;
  transition: all 250ms;
  position: relative;
  :hover {
    box-shadow: ${props => props.soldOut ? '' : 'rgba(0, 0, 0, 0.35) 0px 5px 15px'};
  }
  img {
    width: 100%;
    height: 225px;
    padding: 8px;
    object-fit: cover;
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
    color: #FF724C;
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
    color: #FF724C;
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

const SoldOut = styled.div`
  width: 100%;
  height: 100%;
  visibility: ${props => props.soldOut ? 'visible' : 'hidden'};
  background-color: rgba(221, 221, 221, .5);
 
  position: absolute;
  top: 0;
  h2 {
    width: 100%;
    text-align: center;
    font-size: 28px;
    font-weight: bold;
    color: #F5FAD1;
    text-shadow: black 0.1em 0.1em 0.3em;
  }
`;