import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const token = localStorage.getItem("token");

const fetchMovieDetails = async (id) => {
  const response = await axios.get(`/api/movie-details-${id}`, {
    headers: { "auth-token": token },
  });
  return response.data;
};
export const useTrending = (id) => {
  const {
    data: movieDetails,
    isLoading: isLoadingMovieDetails,
    isError: isErrorMovieDetails,
  } = useQuery(["movie-detail"], fetchMovieDetails(id));

  return { movieDetails, isLoadingMovieDetails, isErrorMovieDetails };
};
