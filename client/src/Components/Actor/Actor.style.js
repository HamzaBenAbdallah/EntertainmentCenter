import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  display: flex;
  position: relative;
  transition: all 0.3s ease;
  align-items: center;
  gap: 1rem;
`;

export const Poster = styled.img`
  display: block;
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  object-fit: fill;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Name = styled.div`
  font-weight: bold;
  color: white;
`;

export const Character = styled.div`
  font-size: 0.8rem;
  color: #c1d5ed;
`;
