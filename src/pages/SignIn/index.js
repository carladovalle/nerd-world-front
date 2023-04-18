import styled from 'styled-components';
import { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import AuthLayout from '../../layouts/Auth';

import Link from '../../components/Link';

import UserContext from '../../contexts/UserContext';

import useSignIn from '../../hooks/api/useSignIn';

export default function SignIn() {
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
      toast('Login realizado com sucesso!');
      navigate('/dashboard/home');
    } catch (err) {
      toast('Não foi possível fazer o login!');
    }
  } 

  return (
    <AuthLayout>
      <Wrapper>
        <h1>entrar</h1>
        <form onSubmit={submit}>
          <input label="E-mail" type="text" fullWidth value={email} onChange={e => setEmail(e.target.value)} />
          <input label="Senha" type="password" fullWidth value={password} onChange={e => setPassword(e.target.value)} />
          <Button type="submit" color="primary" fullWidth disabled={loadingSignIn}>Entrar</Button>
        </form>
        <Link to="/">Não possui login? Inscreva-se</Link>
      </Wrapper>
    </AuthLayout>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #6c757d;
  z-index: 1;
  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  @media (max-width: 600px) {
    width: 100 vw;
    left: 25%;
  }
  h1 {
    font-size: 38px;
    line-height: 72px;
    color: #343a40;
    padding-bottom: 20px;
  }
  form {
      display: flex;
      flex-direction: column;
      gap: 20px;
      justify-content: center;
  }
  input {
      padding: 6px 8px;
      font-size: 16px;
      border: none;
      background: none;
      color:  red;
      border-bottom: 2px solid #dee2e6;
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
  margin-bottom: 10px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 500;
  border: none;
  color: #F5FAD1;
  background-image: linear-gradient(to right, #495057, #ced4da);
  cursor: pointer; 
  
  &:hover {
      opacity: .8;
  }
`;