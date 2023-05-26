import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';

import camisas from '../../assets/img/harry.jpg';
import moletons from '../../assets/img/houseStark.webp';
import pantufas from '../../assets/img/pantufa.jpeg';
import almofadas from '../../assets/img/almofadas.webp';
import luminarias from '../../assets/img/lum.webp';
import quadros from '../../assets/img/quadro.webp';
import diaMaes from '../../assets/img/presenteMae.webp';
import diaPais from '../../assets/img/presentePai.webp';
import presentesAmigos from '../../assets/img/funko.webp';
import canecas from '../../assets/img/caneca.webp';
import portaPipoca from '../../assets/img/portaPipoca.webp';
import shot from '../../assets/img/shot.webp';

const categories = [
  {
    name: 'Camisas',
    image: camisas,
    id: 1
  },
  {
    name: 'Moletons',
    image: moletons,
    id: 2
  },
  {
    name: 'Pantufas',
    image: pantufas,
    id: 3
  },
  {
    name: 'Almofadas',
    image: almofadas,
    id: 4
  },
  {
    name: 'Luminárias',
    image: luminarias,
    id: 5
  },
  {
    name: 'Quadros',
    image: quadros,
    id: 6
  },
  {
    name: 'Dia das mães',
    image: diaMaes,
    id: 7
  },
  {
    name: 'Dia dos pais',
    image: diaPais,
    id: 8
  },
  {
    name: 'Presentes para Amigos',
    image: presentesAmigos,
    id: 9
  },
  {
    name: 'Canecas',
    image: canecas,
    id: 10
  },
  {
    name: 'Baldes de Pipoca',
    image: portaPipoca,
    id: 11
  },
  {
    name: 'Copos de Shot',
    image: shot,
    id: 12
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
  margin-bottom: 40px;
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
