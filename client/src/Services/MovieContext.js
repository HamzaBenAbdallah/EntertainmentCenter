import { createContext } from "react";
import { useFetchTrending } from "Hooks/useFetchTrending";
import { useSignup } from "Hooks/useSignup";
import { useLogin } from "Hooks/useLogin";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const { moviesList, isLoadingMovies, errorMovies } = useFetchTrending();
  const { signupData, signupError, handleSignupChange, handleSignupSubmit } =
    useSignup();
  const { loginData, handleLoginChange, handleLoginSubmit } = useLogin();

  return (
    <MovieContext.Provider
      value={{
        moviesList,
        isLoadingMovies,
        errorMovies,
        signupData,
        signupError,
        handleSignupChange,
        handleSignupSubmit,
        loginData,
        handleLoginChange,
        handleLoginSubmit,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
