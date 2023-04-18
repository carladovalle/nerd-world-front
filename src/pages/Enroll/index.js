import styled from 'styled-components';
import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import AuthLayout from '../../layouts/Auth';

import Link from '../../components/Link';

import useSignUp from '../../hooks/api/useSignUp';

export default function Enroll() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { loadingSignUp, signUp } = useSignUp();

  const navigate = useNavigate();
  
  async function submit(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast('As senhas devem ser iguais!');
    } else {
      try {
        await signUp(email, password);
        toast('Inscrito com sucesso! Por favor, faça login.');
        navigate('/sign-in');
      } catch (error) {
        toast('Não foi possível fazer o cadastro!');
      }
    }
  }

  return (
    <AuthLayout>
      <Wrapper>
        <h1>cadastrar</h1>
        <form onSubmit={submit}>
          <input label="E-mail" type="text" fullWidth value={email} onChange={e => setEmail(e.target.value)} />
          <input label="Senha" type="password" fullWidth value={password} onChange={e => setPassword(e.target.value)} />
          <input label="Repita sua senha" type="password" fullWidth value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
          <Button type="submit" color="primary" fullWidth disabled={loadingSignUp}>Cadastrar</Button>
        </form>
        <Link to="/sign-in">Já está inscrito? Faça login</Link>
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