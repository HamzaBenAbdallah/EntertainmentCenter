import { Route, Routes, Navigate } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "GlobalStyles";
import ScrollToTop from "Utils/ScrollToTop";
import { getCurrentUser } from "Services/getCurrentUser";
/** Components */
import Header from "Components/Header";
import Login from "Components/Login";
import Signup from "Components/Signup";
import Main from "Pages/Main";
import CardDetails from "Components/MovieDetails";
/** Pages */
import Trending from "Pages/Trending";
import Profile from "Pages/Profile";
import Watchlist from "Pages/Watchlist";
import Watched from "Pages/Watched";

const App = () => {
  const { user } = getCurrentUser();

  return (
    <>
      <GlobalStyles />
      <Header />
      <AppContainer>
        <ScrollToTop>
          <Routes>
            <Route path="/" exact element={<Main />} />
            <Route
              path="login"
              exact
              element={user ? <Navigate replace to="/" /> : <Login />}
            />
            <Route
              path="signup"
              exact
              element={user ? <Navigate replace to="/" /> : <Signup />}
            />
            <Route
              path="profile"
              element={user ? <Profile /> : <Navigate replace to="login" />}
            >
              <Route path="watchlist" element={<Watchlist />} />
              <Route path="watched" element={<Watched />} />
            </Route>
            <Route path="trending" exact element={<Trending />} />
            <Route path="movies/:id" exact element={<CardDetails />} />
            <Route path="*" element={<>Not Found</>} />
          </Routes>
        </ScrollToTop>
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
