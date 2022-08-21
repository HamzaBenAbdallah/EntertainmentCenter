import styled from "styled-components";

export const ListContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 15%;
  gap: 2rem;
  padding: 1.5rem 0;
  overflow-x: auto;
  overscroll-behavior-inline: contain;
  scroll-snap-type: inline mandatory;

  & > * {
    scroll-snap-align: start;
  }

  ::-webkit-scrollbar {
    height: 0.75rem;
  }

  ::-webkit-scrollbar-thumb {
    background: #b0b0b0;
    border-radius: 100vw;
  }
`;
