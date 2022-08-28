import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const ListContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 18%;
  gap: 2rem;
  padding: 1.5rem 2rem;
  overflow-x: auto;
  overscroll-behavior-inline: contain;
  scroll-snap-type: inline mandatory;
  scroll-padding-inline: 1rem;

  & > * {
    scroll-snap-align: start;
  }

  ::-webkit-scrollbar {
    height: 0.75rem;
  }

  ::-webkit-scrollbar-thumb {
    background: #b0b0b0;
    border-radius: 100vw;

    &:hover {
      background: #fff;
    }
  }
`;

export const Button = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  width: 100rem;
`;

export const ChevronLeft = styled(FaChevronLeft)`
  font-size: 4rem;
  color: #b0b0b0;

  &:hover {
    color: #fff;
  }
`;

export const ChevronRight = styled(FaChevronRight)`
  font-size: 4rem;
  color: #b0b0b0;

  &:hover {
    color: #fff;
  }
`;
