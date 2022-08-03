import { createContext } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const { data: movies, isLoading: loadingMovies } = useQuery(["movies"], () =>
    axios.get("/api/trending-movies").then((res) => res.data)
  );
  return (
    <MovieContext.Provider value={{ movies, loadingMovies }}>
      {children}
    </MovieContext.Provider>
  );
};
