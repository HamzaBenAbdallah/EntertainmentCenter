import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Backdrop = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: fill;
  filter: brightness(0.6);
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 60%;
  transform: translateY(-10rem);
  margin-top: -15rem;
  z-index: 1;
  gap: 4rem;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  color: white;
`;

export const Title = styled.h1`
  font-size: 4rem;
  text-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
`;

export const Tagline = styled.h2`
  font-size: 2rem;
  color: #cad0d9;
`;

export const Genre = styled.h3`
  font-size: 2rem;
  text-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
  display: flex;
  gap: 1rem;
`;

export const Wrapper = styled.div`
  width: 100%;
  background-color: #21262e;
  color: #a8b4ba;
  border-radius: 5px;
  min-height: 60rem;
  box-shadow: 0px 0px 6px 2px #000000;
  padding: 2rem;
`;

export const Info = styled.div`
  display: grid;
  grid-template-columns: 25% 50% 25%;
`;

export const Poster = styled.img`
  width: 100%;
`;

export const Overview = styled.div`
  display: flex;
  flex-direction: column;
  text-align: justify;
  font-size: 1.35em;
  line-height: 1.3em;
  padding: 4rem 2rem;
  gap: 1.5rem;
`;

export const ExtraDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 4rem 2rem;
`;

export const Similar = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
  gap: 1rem;
  padding: 5rem 0;
`;
