import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  z-index: 99;

  input[type="radio"] {
    display: none;
  }
`;

export const Star = styled.div`
  cursor: pointer;
  transition: color 200ms;
`;
