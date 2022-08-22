import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchTrendingMovies = async () => {
  const response = await axios.get(`/api/trending-movies`);
  return response.data;
};

export const useDiscover = () => {
  const {
    data: moviesList,
    isLoading: isLoadingMovies,
    isError: isErrorMovies,
  } = useQuery(["trending-movies"], fetchTrendingMovies);

  return { moviesList, isLoadingMovies, isErrorMovies };
};
