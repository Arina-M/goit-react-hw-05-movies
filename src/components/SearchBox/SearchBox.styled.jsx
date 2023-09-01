import styled from '@emotion/styled';
import { HiSearch } from 'react-icons/hi';

export const SearchForm = styled.form`
  margin-top: 10px;
  display: inline-flex;
  align-items: center;
  position: relative;
`;

export const SearchInput = styled.input`
  padding: 12px 32px 12px 12px;
  width: 300px;
  font-size: 22px;
  border: none;
  border: 1px solid black;
  background: #f6f6f6;
  background-color: transparent;
  &:active,
  :hover,
  :focus {
    outline: 0;
    outline-offset: 0;
  }
`;

export const SearchIcon = styled(HiSearch)`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 6px;
`;
