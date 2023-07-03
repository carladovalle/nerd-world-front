import { useState } from 'react';
import styled from 'styled-components';
import { SignIn } from '../../components/Launch/SignIn';
import { SignUp } from '../../components/Launch/SignUp';

export default function Launch () {
  const [slide, setSlide] = useState(true);

  return (
    <Wrapper>
      <SlipContainer slide = {slide}/>

      <Button 
        onClick={() => setSlide(!slide)}
        slide = {slide}
      >
        {slide ? 'Cadastro' : 'Login'}
      </Button>

      <SignIn slide = {slide}/>
      <SignUp slide = {slide}/>

      <span onClick={() => setSlide(!slide)}>
        {slide ? 
          <>
            Ainda não tem uma conta? Faça cadastro <a>aqui</a>!
          </>
          : 
          <>
            Já tem cadastro? Faça login <a>aqui</a>!
          </>
        }
      </span>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100 vw;
  height: 100vh;
  display: flex;
  font-family: 'Raleway', sans-serif;
  
  background-image: url('https://picstatio.com/large/a44108/poster-movie-Star-Wars-The-Last-Jedi.jpg');
  background-position: center;
  background-size: cover;

  span {
    width: 100vw;
    text-align: center;
    font-size: 14px;
    color: #495057;
    cursor: pointer;

    position: fixed;
    bottom: 40px;

    @media (min-width: 600px) {
        display: none;
    }
  }

  a {
    text-decoration: underline;
  }

`;

const SlipContainer = styled.div`
  width: 50vw;
  height: 100vh;
  background-color: rgba(12, 12, 12, .4);
  transition: all 0.4s;

  position: fixed;
  right: ${props => props.slide ? '50%' : '0'};


  @media (max-width: 600px) {
      width: 100vw;
      right: 0;
  }
`;

const Button = styled.button`
  width: 130px;
  height: 50px;
  font-size: 14px;
  font-weight: 500;
  color: #F5FAD1;
  border: none;
  transition: all 0.4s;
  background-image: linear-gradient( to right, #6c757d, #e9ecef);
  cursor: pointer;    

  position: fixed;
  ${props => props.slide ? 'left: 50%' : 'right:50%'};

  @media (max-width: 600px) {
      display: none;   
  }
`;