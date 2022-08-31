import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  position: relative;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.35);
  transition: all 0.3s ease;
  height: max-content;

  &:hover {
    transform: scale(1.075);
  }
`;

export const Poster = styled.img`
  display: block;
  width: 100%;
`;
