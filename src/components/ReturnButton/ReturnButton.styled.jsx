import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const OnReturnBtn = styled(Link)`
  color: inherit;
  margin-top: 10px;
  cursor: pointer;
  display: inline-block;
  font-size: 20px;
  padding: 4px 10px;
  text-align: center;
  text-decoration: none;
  width: 100px;
  transition: all 0.3s ease-in;

  &:hover {
    color: red;
  }

  &:focus {
    color: red;
    outline: 0;
  }
`;
