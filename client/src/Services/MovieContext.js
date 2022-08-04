import { createContext } from "react";
import { useFetchTrending } from "Hooks/useFetchTrending";
import { useSignup } from "Hooks/useSignup";
import { useLogin } from "Hooks/useLogin";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const { moviesList, isLoadingMovies } = useFetchTrending();
  const { signupData, handleSignupChange, handleSignupSubmit } = useSignup();
  const { loginData, handleLoginChange, handleLoginSubmit } = useLogin();

  return (
    <MovieContext.Provider
      value={{
        moviesList,
        isLoadingMovies,
        signupData,
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
