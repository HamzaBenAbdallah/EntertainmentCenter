import styled from "styled-components";
import GlobalStyles from "GlobalStyles";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Main></Main>
    </>
  );
};

const Main = styled.div`
  background-color: #19212f;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export default App;
