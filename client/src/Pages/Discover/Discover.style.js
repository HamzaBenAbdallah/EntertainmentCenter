import styled from "styled-components";

export const DiscoverContainer = styled.div`
  min-height: 100vh;
  width: 80%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 3rem 0;
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
`;

export const Filters = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  color: whitesmoke;
`;

export const Content = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
`;

export const Label = styled.div`
  border-top: 1px solid whitesmoke;
  padding: 1rem 0 0.5rem 0;
  font-size: 1.2rem;
  font-weight: 600;
`;

export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.25rem 0;

  span {
    flex: 1 1 50%;
  }

  :nth-child(3) {
    padding-bottom: 1rem;
  }
`;

export const Sort = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  select {
    cursor: pointer;
    font-size: 1rem;
    padding: 1rem;
    border: none;
    border-radius: 0.5rem;
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.6);

    &:focus {
      outline: none;
    }
  }
`;

export const FilterSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  padding: 0.5rem 0 1rem 0;
`;

export const Movies = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 11.5rem);
  justify-content: center;
  gap: 2rem;
`;
