import { createContext } from "react";
import { useFetchTrending } from "Hooks/useFetchTrending";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const { moviesList, isLoadingMovies } = useFetchTrending();

  return (
    <MovieContext.Provider value={{ moviesList, isLoadingMovies }}>
      {children}
    </MovieContext.Provider>
  );
};
