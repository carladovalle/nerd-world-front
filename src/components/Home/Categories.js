import * as Accordion from '@radix-ui/react-accordion';
import styled, { keyframes } from 'styled-components';
import { BsChevronRight } from 'react-icons/bs';

import { useNavigate } from 'react-router-dom';

const categories = [
  {
    name: 'Vestuário',
    image: 'a',
    id: 1
  },
  {
    name: 'Decoração',
    image: 'a',
    id: 2
  },
  {
    name: 'Presentes',
    image: 'a',
    id: 3
  },
  {
    name: 'Cozinha',
    image: 'a',
    id: 4
  }
];

export function Categories() {
  const navigate = useNavigate(); 
  
  return (
    <Wrapper>
      <h1>Navegue</h1>
      <Container>
      {
          categories.map((category) => (
            <Category 
              key={category.name}
              image={category.image}
              onClick={() => navigate(`${category.id}`, {state: { name: category.name }})}
            >
              <h2>{category.name}</h2>
            </Category>
          ))
        }      
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 60vh;
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
    color: #76C352;
  }
`;

const Container = styled.div`
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

const Category = styled.div`
  width: 200px;
  height: 160px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  transition: all 250ms ease;
  background: linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.5));
  background-position: center;
  background-size: cover;
  
  border-radius: 20px;
  border: 3px solid #F5FAD1;
  :hover{
    border: 3px solid #76C352;
    filter: brightness(1.2);
    h2 {
      font-weight: 700;
    }
  }
  h2 {
    color: #F5FAD1;;
    font-size: 26px;
    font-weight: 600;
    text-shadow: black 0.1em 0.1em 0.2em;
    transition: all 500ms ease;
  }
`;
const slideDown = keyframes`
 100% { height: 0 }
 0% { height: var(--radix-accordion-content-height) }
`;

const slideUp = keyframes`
 0% {  height: var(--radix-accordion-content-height) }
 100% { height: 0 }
`;

const Background = styled.div`
  transition: all 0.4s;
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: ${props => props.hidden? 'none' : 'flex'};
  background-color: ${props => props.hidden ? 'rgba(0, 0, 0, 0.0)' : 'rgba(0, 0, 0, 0.7)'};
`;

const Menu = styled.div`
  width: 60vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.4s;
  z-index: 3;
  
  background-color: #F5FAD1;
  position: fixed;
  left: ${props => props.hidden ? '-60vw' : '0'};
  .AccordionItem {
    padding: 10px;
    border-bottom: 1px solid rgba(255, 114, 76, .3);
    overflow: hidden;
    cursor: pointer;
  }
  .AccordionTrigger {
    width: 100%;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 250ms ease;
  }
  .AccordionTrigger[data-state='open'] {
    font-weight: 600;
  }
  .CaretDown {
    transition: transform 250ms ease;
  }
  .AccordionTrigger[data-state='open'] > .CaretDown {
    transform: rotate(90deg);
  }
  .AccordionContent {
    overflow: hidden;
    font-size: 14px;
    line-height: 22px;
    margin-top: 5px;
  }
 /*  .AccordionContent[data-state='open'] {
    animation-name: ${slideDown};
    animation-duration: 300ms;
    animation-timing-function: cubic-bezier(0.87, 0, 0.13, 1);
  }  */
  .AccordionContent[data-state='closed'] {
    animation-name: ${slideUp};
    animation-duration: 300ms;
    animation-timing-function: cubic-bezier(0.87, 0, 0.13, 1);
  }
`;