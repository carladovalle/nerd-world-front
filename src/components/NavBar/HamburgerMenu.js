import * as Accordion from '@radix-ui/react-accordion';
import styled, { keyframes } from 'styled-components';
import { BsChevronRight } from 'react-icons/bs';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { getCategories } from '../../services/categoriesApi';

export function HamburgerMenu ({hidden, setHidden}) {
  const navigate = useNavigate(); 
  const [data, setData] = useState([]); 
  
  useEffect(() => {
    const promise = getCategories();
    promise.then((res => {
      setData(res);
    })).catch(()=>{
      alert('An error occurred while trying to fetch the data, please refresh the page');
    });
  }, []);

  return (
    <Container>
      <Background hidden={hidden} onClick={()=> setHidden(true)}/>
      <Menu hidden={hidden}>      
        <Accordion.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible>
          {
            data.map((category, index) => (
              <Accordion.Item key={category.id} className="AccordionItem" value={`item-${index+2}`}>
                <Accordion.Trigger className="AccordionTrigger">
                  <div>{category.name}</div> 
                  <BsChevronRight className="CaretDown" aria-hidden/>
                </Accordion.Trigger>
                <Accordion.Content className="AccordionContent">
                  <ul>
                    {
                      category.Types.map(type => (
                        <li 
                          key={type.id}
                          onClick={() => {
                            setHidden(true);
                          }}
                        >
                          {type.name}
                        
                        </li>
                      ))
                    }                    
                  </ul>
                </Accordion.Content>
              </Accordion.Item>
            ))
          }
        </Accordion.Root>
      </Menu>
    </Container> 
  );
}

const slideDown = keyframes`
 100% { height: 0 }
 0% { height: var(--radix-accordion-content-height) }
`;

const slideUp = keyframes`
 0% {  height: var(--radix-accordion-content-height) }
 100% { height: 0 }
`;

const Container = styled.div`
  position: fixed;
  display: flex;
  z-index: 2;
  top: 0;
  left: 0;
  button,
  h3 {
    all: unset;
  }
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
  
  background-color: #adb5bd;
  position: fixed;
  left: ${props => props.hidden ? '-60vw' : '0'};
  .AccordionItem {
    padding: 10px;
    border-bottom: 1px solid white;
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