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
      <Link to="/dashboard/popular">
        <NavigationButton active={isActive('/dashboard/popular')}>
          <FaFileContract />
          <span>Popular</span>
        </NavigationButton>
      </Link>

    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ddd;
  box-shadow: 2px 0 10px 0 rgba(0,0,0,0.1);
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