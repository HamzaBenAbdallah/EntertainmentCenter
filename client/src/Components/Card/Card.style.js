import styled from "styled-components";
import { numColumns, cardGap } from "Services/StyleContext";

export const Poster = styled.img`
  display: block;
  max-width: 100%;
`;

export const Detail = styled.div`
  pointer-events: none;
  width: calc(200% + ${cardGap}rem);
  position: absolute;
  top: 0;
  z-index: 1;
  opacity: 0;
  transition: 0s;
  font-family: sans-serif;
  color: #acb4bf;
  line-height: 1.35em;

  > div {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 0.9em;
  }
`;

export const Header = styled.div`
  background: #222b39;

  ::before {
    content: "";
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 20px;
  }
`;

export const Container = styled.div`
  cursor: pointer;
  position: relative;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.35);

  :not(:nth-child(${numColumns}n), :nth-child(${numColumns}n - 1)) {
    ${Detail} {
      left: calc(100% + ${cardGap}rem);
    }

    ${Header}::before {
      top: 5%;
      left: -40px;
      border-color: transparent #222b39 transparent transparent;
    }
  }

  :nth-child(${numColumns}n),
  :nth-child(${numColumns}n - 1) {
    ${Detail} {
      right: calc(100% + ${cardGap}rem);
    }

    ${Header}::before {
      top: 5%;
      right: -40px;
      border-color: transparent transparent transparent #222b39;
    }
  }

  :hover ${Detail} {
    opacity: 1;
    transition-delay: 300ms;
  }
`;

export const Title = styled.div`
  font-size: 1.25em;
  font-weight: bold;
  margin-bottom: 0.25em;
  line-height: 1.25em;
`;

export const Genre = styled.div`
  color: #7c8899;
`;

export const Content = styled.div`
  background: #283343;
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.35);
  border-bottom: 1px solid rgba(0, 0, 0, 0.35);
`;

export const Overview = styled.div`
  width: 35ch;
  line-height: 1.75em;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`;

export const Footer = styled.div`
  background: #222b39;
`;
