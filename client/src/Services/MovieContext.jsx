import { createContext } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const { data: movies1, isLoading: loadingMovies1 } = useQuery(
    ["movies"],
    () => axios.get("/api/trending-movies").then((res) => res.data)
  );
  const { data: movies2, isLoading: loadingMovies2 } = useQuery(
    ["movies2"],
    () => axios.get("/api/trending-movies?page=2").then((res) => res.data)
  );

  const isLoadingMovies = loadingMovies1 || loadingMovies2;

  let moviesList = [];
  if (!isLoadingMovies) {
    moviesList = [...movies1, ...movies2];
  }

  return (
    <MovieContext.Provider value={{ moviesList, isLoadingMovies }}>
      {children}
    </MovieContext.Provider>
  );
};
