import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  gap: 1rem;
  background-color: white;
  color: black;
  border-radius: 0.4rem;
  overflow: hidden;
`;

export const Poster = styled.img`
  display: block;
  width: 100%;
  height: 15rem;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  min-height: 6rem;
`;

export const Name = styled.div`
  font-weight: 700;
`;

export const Character = styled.div`
  font-size: 0.8rem;
`;
