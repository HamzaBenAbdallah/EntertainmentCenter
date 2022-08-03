import styled from "styled-components";
import GlobalStyles from "GlobalStyles";
import Main from "Pages/Main";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <Main />
      </AppContainer>
    </>
  );
};

const AppContainer = styled.div`
  background-color: #19212f;
  min-height: 100vh;
  font-family: sans-serif;
  padding: 5rem 10%;
`;

export default App;
