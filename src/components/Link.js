import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  font-size: 15px;
  text-decoration: none;
  color: #222;
  &:hover {
    text-decoration: underline;
  }
`;