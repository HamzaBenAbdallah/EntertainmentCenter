import styled from "styled-components";

export const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
  justify-content: center;
  gap: 2rem;
  padding: 5rem 7.5rem;
`;
