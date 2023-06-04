import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';

import UserContext from '../../contexts/UserContext';

import useSignIn from '../../hooks/api/useSignIn';

import { signIn, authSignIn } from '../../services/authApi';

export function SignIn ({ slide } ) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { loadingSignIn, signIn } = useSignIn();

  const { setUserData } = useContext(UserContext);

  const navigate = useNavigate();
  
  async function submit(event) {
    event.preventDefault();

    try {
      const userData = await signIn(email, password);
      setUserData(userData);
      navigate('/dashboard/home');
    } catch (error) {
      console.log(error);
    }
  } 

  return (
    <Wrapper slide = {slide}>
      <h1>Login</h1>
        <form onSubmit={submit}>
          <input label="E-mail" type="text" fullWidth value={email} onChange={e => setEmail(e.target.value)} />
          <input label="Senha" type="password" fullWidth value={password} onChange={e => setPassword(e.target.value)} />
          <Button type="submit" color="primary" fullWidth disabled={loadingSignIn}>Entrar</Button>
        </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
    width: 50vw;
    height: 100vh;
    display: ${props => props.slide ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #F5FAD1;
    z-index: 1;

    position: fixed;
    left: 0;

    @media (max-width: 600px) {
        width: 100 vw;
        left: 25%;
    }

    h1 {
        font-size: 48px;
        line-height: 72px;
        color:  #F5FAD1;
        padding-bottom: 20px;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 20px;

    }

    input {
        padding: 6px 8px;
        font-size: 16px;
        border: none;
        background: none;
        color:  #F5FAD1;
        border-bottom: 2px solid #76C352;
    }

    label, span {
        font-size: 14px;
        font-weight: 500;
    }

    span {
        align-self: flex-end;
        padding-left: 40px;
        text-decoration: underline;
        cursor: pointer;

        &:hover {
            opacity: .8;
        }
    }
`;

const Button = styled.button`
  height: 30px;
  margin-top: 10px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 500;
  border: none;
  color: #F5FAD1;
  background-image: linear-gradient( to right, #083316, #76C352);
  cursor: pointer; 
  
  &:hover {
      opacity: .8;
  }
`;

const AuthSignIn = styled.button`
  height: 30px;
  margin-top: 10px;
  gap: 10px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #76C352;
  color: #F5FAD1;
  background: none;
  cursor: pointer; 
`;