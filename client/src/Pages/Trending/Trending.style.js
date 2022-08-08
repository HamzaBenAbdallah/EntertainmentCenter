import styled from "styled-components";

export const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 9rem);
  justify-content: center;
  gap: 1rem 2rem;
  padding: 2rem 1rem;

  @media (min-width: 992px) {
    grid-template-columns: repeat(auto-fit, 11rem);
    padding: 5rem;
  }
`;
