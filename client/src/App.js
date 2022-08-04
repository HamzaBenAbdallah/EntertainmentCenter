import { Route, Routes, Navigate } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "GlobalStyles";
import Main from "Pages/Main";
import Signup from "Components/Signup";
import Login from "Components/Login";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/" exact element={<Navigate replace to="/login" />} />
        </Routes>
      </AppContainer>
    </>
  );
};

const AppContainer = styled.div`
  background-color: #19212f;
  min-height: 100vh;
  font-family: sans-serif;
  padding: 0 10%;
`;

export default App;
