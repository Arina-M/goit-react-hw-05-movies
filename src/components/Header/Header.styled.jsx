import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MovieHeader = styled.header`
  padding: 20px 0px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
`;

export const HeaderNav = styled.nav`
  display: flex;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 500;
  font-size: 24px;
  padding: 5px;
  color: black;

  &:not(:last-child) {
    margin-right: 48px;
  }

  &.active {
    color: rgb(72, 91, 187);
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #41259e;
  }
`;
