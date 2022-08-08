import styled from "styled-components";

export const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 9rem);
  justify-content: center;
  gap: 1rem 2rem;
  padding: 3rem 1rem;

  @media (min-width: 43rem) {
    grid-template-columns: repeat(auto-fit, 11rem);
    padding: 5rem;
  }

  @media (min-width: 62rem) {
    grid-template-columns: repeat(auto-fit, 11rem);
    padding: 5rem;
  }
`;
