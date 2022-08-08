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
  filter: brightness(0.7);
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 70%;
  transform: translateY(-10rem);
  margin-top: -15rem;
  z-index: 1;
  gap: 4rem;
`;

export const TitleContainer = styled.div`
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

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  background-color: #21262e;
  color: white;
  border-radius: 5px;
  min-height: 60rem;
  box-shadow: 0px 0px 6px 2px #000000;
  padding: 2rem;
`;

export const Info = styled.div`
  display: grid;
  grid-template-columns: 35% 65%;
`;

export const Poster = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.4rem;
`;

export const Overview = styled.div`
  display: flex;
  flex-direction: column;
  text-align: justify;
  font-size: 1.35em;
  line-height: 1.3em;
  padding: 0.5rem 2rem;
  gap: 1rem;

  span {
    font-size: 1rem;
  }
`;

export const Genre = styled.div`
  display: flex;
  gap: 0.75rem;
  font-size: 1rem;
`;

export const ActorGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem 4rem;
  margin: 0 auto;
`;

export const Cast = styled.div`
  align-self: center;
  font-weight: bold;
  font-size: 2.5rem;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5rem;
`;

export const Button = styled.button`
  all: unset;
  cursor: pointer;
  background-image: linear-gradient(
    to right,
    #0575e6 0%,
    #021b79 51%,
    #0575e6 100%
  );
  background-size: 200% auto;
  padding: 1rem 1.5rem;
  border-radius: 2rem;
  box-shadow: 0 0 5px #eee;
  color: #ffffff;
  font-size: 1.25em;
  font-weight: 700;
  letter-spacing: 0.04em;
  transition: all 0.3s;

  :hover {
    transform: scale(1.1);
    background-position: right center;
  }

  :last-child {
    background-image: linear-gradient(
      to right,
      #093028 0%,
      #237a57 51%,
      #093028 100%
    );
  }
`;

export const Similar = styled.div`
  span {
    font-size: 2.5rem;
    font-weight: bold;
  }
`;

export const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.25rem;
  padding: 3rem 0;
`;
