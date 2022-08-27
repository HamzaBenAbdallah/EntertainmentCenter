import styled from "styled-components";

export const DiscoverContainer = styled.div`
  min-height: 100vh;
  width: 80%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 3rem 0;
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
  border-top: 1px solid whitesmoke;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
`;

export const Label = styled.div``;

export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    flex: 1 1 50%;
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
  gap: 0.5rem;
`;

export const Movies = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 11.5rem);
  justify-content: center;
  gap: 2rem;
`;
