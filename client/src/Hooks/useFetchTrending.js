/** Fetch the first 2 pages from trending movies */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useFetchTrending = () => {
  const {
    data: movies1,
    isLoading: loadingMovies1,
    error: errorMovie1,
  } = useQuery(["movies"], () =>
    axios.get("/api/trending-movies").then((res) => res.data)
  );
  const {
    data: movies2,
    isLoading: loadingMovies2,
    error: errorMovie2,
  } = useQuery(["movies2"], () =>
    axios.get("/api/trending-movies?page=2").then((res) => res.data)
  );

  const isLoadingMovies = loadingMovies1 || loadingMovies2;
  const errorMovies = errorMovie1 || errorMovie2;

  let moviesList = [];
  if (!isLoadingMovies && !errorMovies) {
    moviesList = [...movies1, ...movies2];
  }

  return { moviesList, isLoadingMovies, errorMovies };
};
