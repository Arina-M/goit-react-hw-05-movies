import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieCardItem = styled.li`
  justify-self: center;
`;

export const MovieCardLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  display: block;
  height: 100%;

  &:hover MovieCardItem {
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }
`;

export const MovieImageWrapper = styled.div`
  overflow: hidden;
`;
export const MovieCardImage = styled.img`
  max-width: 100%;
  object-fit: cover;
  width: 350px;
`;

export const MovieCardInfo = styled.div`
  padding: 4px;
  background-color: #fff;
  height: auto;
`;
