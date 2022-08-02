import styled from "styled-components";
import GlobalStyles from "GlobalStyles";
import Card from "Components/Card.js";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Main>
        <Card />
      </Main>
    </>
  );
};

const Main = styled.div`
  // background-color: #19212f;
  background-color: #fff;
  min-height: 100vh;
  font-family: sans-serif;
  padding: 10rem 12.5%;
`;

export default App;
