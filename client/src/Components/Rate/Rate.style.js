import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  input[type="radio"] {
    display: none;
  }
`;

export const Star = styled.div`
  cursor: pointer;
  transition: color 200ms;
`;
