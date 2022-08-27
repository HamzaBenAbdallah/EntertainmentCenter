import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border: 4px solid #020d18;
  color: white;
  border-radius: 5rem;
  background: #233a50;
  padding: 0.75rem 1rem;
  gap: 0.5rem;
`;

export const Input = styled.input`
  all: unset;
  width: 25rem;
  font-size: 1.25rem;
  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #abb7c4;
  }
`;

export const Remove = styled.button`
  all: unset;
  cursor: pointer;
  visibility: hidden;

  &.show {
    visibility: visible;
  }
`;
