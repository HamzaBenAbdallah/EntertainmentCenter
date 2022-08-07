import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const token = localStorage.getItem("token");

const fetchTrendingMovies = async () => {
  const response = await axios.get(`/api/trending-movies`, {
    headers: { "auth-token": token },
  });
  return response.data;
};
export const useTrending = () => {
  const {
    data: moviesList,
    isLoading: isLoadingMovies,
    isError: isErrorMovies,
  } = useQuery(["trending-movies"], fetchTrendingMovies);

  return { moviesList, isLoadingMovies, isErrorMovies };
};
