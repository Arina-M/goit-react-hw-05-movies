import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MovieCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;

export const MovieCardPoster = styled.img`
  border-radius: 10px;
  margin-right: 60px;
`;

export const MovieCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const MovieCardTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const MovieCardRating = styled.p`
  margin-bottom: 10px;
`;

export const MovieCardLink = styled.div`
  display: flex;
  margin-bottom: 10px;
  & p {
    margin-right: 8px;
  }
`;

export const MovieCardBudget = styled.p`
  margin-bottom: 10px;
`;
export const MovieCardGenres = styled.ul`
  display: flex;
  margin-bottom: 10px;

  & li:not(:last-child) {
    margin-right: 5px;
  }

  & p {
    margin-right: 8px;
  }
`;

export const MovieLinksBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MovieLinksText = styled.p`
  font-size: 20px;
  margin-top: 40px;
  margin-bottom: 8px;
`;

export const MovieLink = styled(NavLink)`
  font-weight: 500;
  width: 100px;
  padding: 5px;
  display: flex;
  border-radius: 4px;
  text-decoration: none;
  color: inherit;

  &.active {
    color: red;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #41259e;
  }

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;
