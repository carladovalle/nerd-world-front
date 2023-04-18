import * as Menubar from '@radix-ui/react-menubar';
import styled from 'styled-components';

import { BsCart } from 'react-icons/bs';

import { CartMenu } from './CartMenu';

export function MenuBar() {

  return (
    <Root>
      <Menubar.Menu>
        <Trigger>
          <Cart>
            <BsCart className='icon'/>
          </Cart>
        </Trigger>
        <Menubar.Portal>
          <Content align="end" sideOffset={5} alignOffset={-3}>
            <CartMenu />
          </Content>
        </Menubar.Portal>
      </Menubar.Menu>
    </Root>
  );
}

const Root = styled(Menubar.Root)`
  width: 30vw;       
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  button {
    all: unset;
  }
`;

const Trigger = styled(Menubar.Trigger)`
  .icon {
    font-size: 22px;
  }
  &&[data-highlighted],
  &&[data-state='open'] {
    .icon {
      opacity: .8;
    }
  }
  span {
    margin-right: 10px;
  }
  @media (max-width: 850px) {
    span {
      display: none;
    }
  }
`;

const Content = styled(Menubar.Content)`
  min-width: 150px;
  padding: 5px;
  border-radius: 6px;
  text-align: center;
  font-family: 'Raleway', sans-serif;
  color: #f8f9fa;
  background-color: #6c757d;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
  z-index: 2;
`;

const Cart = styled.div`
  padding: 10px;
  position: relative;
`;
