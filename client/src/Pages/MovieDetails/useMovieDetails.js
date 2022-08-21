import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { getCurrentUser } from "Services/getCurrentUser";

const { user } = getCurrentUser();

const fetchMovieDetails = async (id) => {
  const response = await axios.get(`/api/movie-details?id=${id}`);
  return response.data;
};

const fetchWatchlist = async () => {
  if (user) {
    const response = await axios.post(`/api/get-watchlist`, { user });
    return response.data;
  }
};

const addMovieToWatchlist = async (movieDetails) => {
  return await axios.post(`/api/add-to-watchlist`, { movieDetails, user });
};

const fetchWatched = async () => {
  if (user) {
    const response = await axios.post(`/api/get-watched`, { user });
    return response.data;
  }
};

const addMovieToWatched = async (movieDetails) => {
  return await axios.post(`/api/add-to-watched`, { movieDetails, user });
};

export const useMovieDetails = (id) => {
  const queryClient = useQueryClient();

  const {
    data: movieDetails,
    isLoading: isLoadingMovieDetails,
    isError: isErrorMovieDetails,
  } = useQuery(["movie-details", id], () => fetchMovieDetails(id));

  const { data: watchlist } = useQuery(["watchlist"], () => fetchWatchlist());

  const { data: watched } = useQuery(["watched"], () => fetchWatched());

  const { mutate: mutateWatchlist } = useMutation(
    () => addMovieToWatchlist(movieDetails),
    {
      onSuccess: () => queryClient.invalidateQueries(["watchlist"]),
    }
  );

  const { mutate: mutateWatched } = useMutation(
    () => addMovieToWatched(movieDetails),
    {
      onSuccess: () => queryClient.invalidateQueries(["watched"]),
    }
  );

  return {
    movieDetails,
    isLoadingMovieDetails,
    isErrorMovieDetails,
    watchlist,
    watched,
    mutateWatchlist,
    mutateWatched,
  };
};
