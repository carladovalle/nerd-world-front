import styled from 'styled-components';
import { useState } from 'react';

import useSignUp from '../../hooks/api/useSignUp';

export function SignUp ({ slide } ) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { loadingSignUp, signUp } = useSignUp();
  
  async function submit(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('As senhas devem ser iguais!');
    } else {
      try {
        await signUp(email, password);
        alert('Inscrito com sucesso! Por favor, faça login.');
      } catch (error) {
        alert(error);
      }
      }
    }

  return (
    <Wrapper slide = {slide}>
        <h1>Cadastro</h1>
        <form onSubmit={submit}>
          <input label="E-mail" type="text" fullWidth value={email} onChange={e => setEmail(e.target.value)} />
          <input label="Senha" type="password" fullWidth value={password} onChange={e => setPassword(e.target.value)} />
          <input label="Repita sua senha" type="password" fullWidth value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
          <button type="submit" color="primary" fullWidth disabled={loadingSignUp}>Cadastrar</button>
        </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 50vw;
  height: 100vh;
  display: ${props => props.slide ? 'none' : 'flex'};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;

  position: fixed;
  right: 0;

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

  button {
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
  }
`;