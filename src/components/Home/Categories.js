import styled, { keyframes } from 'styled-components';

import { useNavigate } from 'react-router-dom';

import vest from '../../assets/img/harry.jpg';
import dec from '../../assets/img/lum.webp';
import pre from '../../assets/img/funko.webp';
import coz from '../../assets/img/caneca.webp';

const categories = [
  {
    name: 'Vestuário',
    image: vest,
    id: 1
  },
  {
    name: 'Decoração',
    image: dec,
    id: 2
  },
  {
    name: 'Presentes',
    image: pre,
    id: 3
  },
  {
    name: 'Cozinha',
    image: coz,
    id: 4
  }
];

export function Categories() {
  const navigate = useNavigate(); 
  
  return (
    <Wrapper>
      <h1>Por categoria</h1>
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
    color: #495057;
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
  width: 250px;
  height: 200px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  transition: all 250ms ease;

  background: linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.5)),
    url(${props => props.image});
  background-position: center;
  background-size: cover;
  
  border-radius: 20px;
  border: none;
  :hover{
    filter: brightness(1.2);
    h2 {
      font-weight: 700;
    }
  }
  h2 {
    margin-top: 210px;
    color: #343a40;
    font-size: 15px;
    font-weight: 600;
    transition: all 500ms ease;
  }
`;
