import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useTrending = () => {
  const token = localStorage.getItem("token");
  const {
    data: moviesList,
    isLoading: isLoadingMovies,
    error: errorMovies,
  } = useQuery(["movies"], () =>
    axios
      .get("/api/trending-movies", { headers: { "auth-token": token } })
      .then((res) => res.data)
  );

  return { moviesList, isLoadingMovies, errorMovies };
};
