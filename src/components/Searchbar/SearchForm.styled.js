import styled from 'styled-components';

export const SearchForm = styled.header`
  background: var(--colorPrimary);
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 3px;
  overflow: hidden;

  .search-item {
    text-align: center;
    width: 100%;
  }

  input {
    max-width: 400px;
    width: 100%;
    border: none;
  }
`;
