import styled from "styled-components";

export const SearchBarContainer = styled.input`
  border: 2px solid black;
  background-color: transparent;
  color: white;
  font-size: 1.25rem;
  border-radius: 50px;
  padding: 0.5rem 1.5rem;

  &:focus {
    outline: none;
  }
`;
