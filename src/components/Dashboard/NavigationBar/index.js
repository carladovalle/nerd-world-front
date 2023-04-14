import { Link, useLocation } from 'react-router-dom';

import styled from 'styled-components';

import {
  FaFileContract
} from 'react-icons/fa';

import NavigationButton from './NavigationButton';

export default function NavigationBar() {
  const location = useLocation();

  function isActive(buttonPath) {
    return location.pathname === buttonPath;
  }

  return (
    <Container>

      <Link to="/dashboard/about">
        <NavigationButton active={isActive('/dashboard/about')}>
          <FaFileContract />
          <span>about</span>
        </NavigationButton>
      </Link>

      <Link to="/dashboard/home">
        <NavigationButton active={isActive('/dashboard/home')}>
          <FaFileContract />
          <span>home</span>
        </NavigationButton>
      </Link>

    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: pink;
  width: 100px;
  flex-shrink: 0;
  justify-content: flex-start;
  > a {
    text-decoration: none;
  }
  @media (max-width: 600px) {
    width: 100%;
    height: 80px;
    flex-direction: row;
  }
`;