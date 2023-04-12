import styled from 'styled-components';

import { HiOutlineBadgeCheck } from 'react-icons/hi';
import { FaTruck } from 'react-icons/fa';

export function Benefits() {
  return (
    <Wrapper>
      <div>
        <HiOutlineBadgeCheck className='icon' />
        <p>30 dias de garantia</p>
      </div>
      <div>
        <FaTruck className='icon' />
        <p>frete grátis acima de R$ 300,00</p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 90%;
  height: 40vh;
  margin: 0 auto;
  gap: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-family: 'Raleway', sans-serif; 
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: all .4s;
    :hover{
      opacity: .7;
    }
    p {
      font-weight: 500;
    }
  }
  .icon {
    font-size: 72px;
  }
`;