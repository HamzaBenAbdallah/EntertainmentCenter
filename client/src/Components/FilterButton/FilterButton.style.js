import styled from "styled-components";

export const Container = styled.div`
  outline: 1px solid whitesmoke;
  cursor: pointer;
  display: inline-block;
  padding: 0.5rem;
  border-radius: 1rem;

  &:hover {
    background-color: whitesmoke;
    color: black;
  }

  &.active {
    background-color: whitesmoke;
    color: black;
  }
`;
