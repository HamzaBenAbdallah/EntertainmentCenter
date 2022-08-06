import { Route, Routes, Navigate } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "GlobalStyles";
import Main from "Pages/Main";
import Featured from "Pages/Featured";
import Signup from "Components/Signup";
import Login from "Components/Login";

const App = () => {
  const user = localStorage.getItem("token");

  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <Routes>
          {user && <Route path="/" exact element={<Main />} />}
          <Route path="/" exact element={<Navigate replace to="/login" />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/featured" exact element={<Featured />} />
          <Route path="*" element={<>Not Found</>} />
        </Routes>
      </AppContainer>
    </>
  );
};

const AppContainer = styled.div`
  background-color: #19212f;
  min-height: 100vh;
  font-family: sans-serif;
`;

export default App;
