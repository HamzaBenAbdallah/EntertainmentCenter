import styled from "styled-components";

export const Container = styled.button`
  all: unset;
  cursor: pointer;
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 5px #000;
  background-color: var(--secondary-color);

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }
`;
