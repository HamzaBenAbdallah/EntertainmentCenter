import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";

const token = localStorage.getItem("token");

const fetchMovieDetails = async (id) => {
  const response = await axios.get(`/api/movie-details?id=${id}`, {
    headers: { "auth-token": token },
  });
  return response.data;
};

const addMovieToWatchlist = async (movieDetails) => {
  return await axios.post(`/api/watchlist`, movieDetails, {
    headers: { "auth-token": token },
  });
};

const addMovieToWatched = async (movieDetails) => {
  return await axios.post(`/api/watched`, movieDetails, {
    headers: { "auth-token": token },
  });
};

export const useMovieDetails = (id) => {
  const {
    data: movieDetails,
    isLoading: isLoadingMovieDetails,
    isError: isErrorMovieDetails,
  } = useQuery(["movie-details", id], () => fetchMovieDetails(id));

  const { mutate: mutateWatchlist } = useMutation(() =>
    addMovieToWatchlist(movieDetails)
  );
  const { mutate: mutateWatched } = useMutation(() =>
    addMovieToWatched(movieDetails)
  );

  return {
    movieDetails,
    isLoadingMovieDetails,
    isErrorMovieDetails,
    mutateWatchlist,
    mutateWatched,
  };
};
