import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Backdrop = styled.div`
  width: 100%;
  height: 80vh;
  filter: brightness(0.5);
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

export const DetailsContainer = styled.div`
  display: flex;
  background-color: var(--background-color);
  color: white;
  flex-direction: column;
  text-align: center;
  width: 70%;
  transform: translateY(-20rem);
  gap: 4rem;
  border-radius: 5px;
  box-shadow: 0px 0px 3px 1px #000000;
  padding: 2rem;
`;

export const Info = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
`;

export const Poster = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.4rem;
`;

export const Overview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: justify;
  font-size: 1.15em;
  line-height: 1.3em;
  padding: 0.5rem 2rem;
  gap: 1rem;
`;

export const Title = styled.h2`
  font-size: 3rem;
  font-weight: 900;
  text-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
`;

export const Details = styled.div`
  display: flex;
  gap: 0.5rem;
  font-size: 1.15rem;
`;

export const User = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  height: 5rem;
`;

export const RoundButton = styled.button`
  all: unset;
  cursor: pointer;
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 5px #000;
  transition: all 0.25s ease-in-out;
  background-color: white;

  &:hover:enabled {
    transform: scale(1.15);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }
`;

export const Tagline = styled.p`
  color: #cad0d9;
  font-weight: 400;
  font-style: italic;
`;

export const SecondaryTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
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

  :hover:enabled {
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

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
    background-image: linear-gradient(
      to right,
      #232526 0%,
      #414345 51%,
      #232526 100%
    );
  }
`;

export const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.25rem;
  padding: 3rem 0;
`;

export const Similar = styled.div`
  span {
    font-size: 2.5rem;
    font-weight: bold;
  }
`;
