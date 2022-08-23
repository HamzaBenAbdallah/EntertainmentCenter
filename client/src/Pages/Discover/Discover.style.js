import styled from "styled-components";

export const DiscoverContainer = styled.div`
  min-height: 100vh;
  width: 80%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 3rem 0;
`;

export const Filters = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  color: whitesmoke;
`;

export const Content = styled.div`
  width: 100%;
  border-top: 1px solid whitesmoke;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
`;

export const Label = styled.div``;

export const Genre = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const Movies = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 11.5rem);
  justify-content: center;
  gap: 2rem;
`;
