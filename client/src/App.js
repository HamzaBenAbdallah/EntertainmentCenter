import { Route, Routes, Navigate } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "GlobalStyles";
import Main from "Pages/Main";
import Featured from "Pages/Trending";
import Signup from "Components/Signup";
import Login from "Components/Login";
import CardDetails from "Components/CardDetails";

const App = () => {
  const user = localStorage.getItem("token");

  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <Routes>
          <Route
            path="/"
            exact
            element={user ? <Main /> : <Navigate replace to="/login" />}
          />
          <Route
            path="/login"
            exact
            element={user ? <Navigate replace to="/" /> : <Login />}
          />
          <Route
            path="/signup"
            exact
            element={user ? <Navigate replace to="/" /> : <Signup />}
          />
          <Route path="/trending" exact element={<Featured />} />
          <Route path="/movies/:movie" exact element={<CardDetails />} />
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
