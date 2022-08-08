import { Route, Routes, Navigate } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "GlobalStyles";
import Header from "Components/Header";
import Main from "Pages/Main";
import Login from "Components/Login";
import Signup from "Components/Signup";
import Profile from "Pages/Profile";
import Trending from "Pages/Trending";
import CardDetails from "Components/MovieDetails";

const App = () => {
  const user = localStorage.getItem("token");

  return (
    <>
      <GlobalStyles />
      <Header />
      <AppContainer>
        <Routes>
          <Route
            path="/"
            exact
            element={user ? <Trending /> : <Navigate replace to="/login" />}
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
          <Route path="/profile" element={<Profile />} />
          <Route path="/trending" exact element={<Trending />} />
          <Route path="/movies/:id" exact element={<CardDetails />} />
          <Route path="*" element={<>Not Found</>} />
        </Routes>
      </AppContainer>
    </>
  );
};

const AppContainer = styled.div`
  background-color: #181b21;
  min-height: 100vh;
  font-family: sans-serif;
`;

export default App;
