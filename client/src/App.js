import { Route, Routes, Navigate } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "GlobalStyles";
import { getCurrentUser } from "Services/getCurrentUser";
import ScrollToTop from "Utils/ScrollToTop";
import ProtectedRoute from "Utils/ProtectedRoute";
/** Components */
import Header from "Components/Header";
/** Pages */
import Login from "Pages/Login";
import Signup from "Pages/Signup";
import Main from "Pages/Main";
import Discover from "Pages/Discover";
import CardDetails from "Pages/MovieDetails";
import Profile from "Pages/Profile";
import Watchlist from "Pages/Watchlist";
import Watched from "Pages/Watched";
import SearchResults from "Pages/SearchResults";
import Error from "Pages/Error";

const App = () => {
  const { user } = getCurrentUser();

  return (
    <>
      <GlobalStyles />
      <Header />
      <AppContainer>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="login"
              element={user ? <Navigate replace to="/" /> : <Login />}
            />
            <Route
              path="signup"
              element={user ? <Navigate replace to="/" /> : <Signup />}
            />
            <Route
              path="profile"
              element={
                <ProtectedRoute user={user}>
                  <Profile />
                </ProtectedRoute>
              }
            >
              <Route path="watchlist" element={<Watchlist />} />
              <Route path="watched" element={<Watched />} />
            </Route>
            <Route path="Discover" element={<Discover />} />
            <Route path="search/:searchTerm" element={<SearchResults />} />
            <Route path="movies/:id" element={<CardDetails />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </ScrollToTop>
      </AppContainer>
    </>
  );
};

const AppContainer = styled.div`
  background-color: var(--primary-color);
  min-height: 100vh;
`;

export default App;
