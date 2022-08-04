import styled from "styled-components";
import { numColumns, cardGap, cardWidth } from "Services/StyleContext";

export const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${numColumns}, ${cardWidth}%);
  justify-content: center;
  gap: ${cardGap}rem;
`;
