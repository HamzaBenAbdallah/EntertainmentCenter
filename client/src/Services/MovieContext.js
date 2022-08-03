import { createContext } from "react";
import { useState, useEffect } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const movie = async () => {
      const response = await fetch("/api/trending-movies");
      // const data = await response.json();
      console.log(response);
      // setMovies(data);
      setIsLoading(false);
    };

    movie();
  }, []);

  return <MovieContext.Provider value={""}>{children}</MovieContext.Provider>;
};
