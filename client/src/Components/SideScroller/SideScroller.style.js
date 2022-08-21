import styled from "styled-components";

export const ListContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 14%;
  gap: 2rem;
  padding: 1.5rem;
  overflow-x: auto;
  overscroll-behavior-inline: contain;
  scroll-snap-type: inline mandatory;
  scroll-padding-inline: 2rem;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  & > * {
    scroll-snap-align: start;
  }
`;
