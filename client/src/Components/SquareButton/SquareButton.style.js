import styled from "styled-components";

export const Container = styled.button`
  all: unset;
  cursor: pointer;
  height: 2.5rem;
  border-radius: 5%;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: #959595;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }

  :hover {
    color: black;
  }
`;
