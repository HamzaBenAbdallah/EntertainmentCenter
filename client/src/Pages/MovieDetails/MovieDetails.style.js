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
  background-color: var(--primary-color);
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
  padding: 0.5rem 2rem;
  gap: 1rem;

  p {
    line-height: 1.25em;
  }
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
  background-color: var(--secondary-color);

  &:hover:enabled {
    transform: scale(1.15);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }
`;

export const Tagline = styled.p`
  color: var(--secondary-color);
  font-weight: 400;
  font-style: italic;
`;

export const SecondaryTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const Crew = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
  gap: 1rem;
  margin-top: 2rem;
`;

export const Name = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.35rem;
`;

export const Job = styled.div`
  font-size: 0.9rem;
  color: var(--secondary-color);
`;

export const ActorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0 2rem;
`;

export const Cast = styled.div`
  align-self: center;
  font-weight: 900;
  font-size: 2.5rem;
`;

export const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  gap: 1.25rem;
  padding: 3rem 0;
`;

export const Similar = styled.div`
  span {
    font-size: 2.5rem;
    font-weight: 900;
  }
`;
