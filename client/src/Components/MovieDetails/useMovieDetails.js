import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { getCurrentUser } from "Services/getCurrentUser";

const { user, token } = getCurrentUser();

const fetchMovieDetails = async (id) => {
  const response = await axios.get(`/api/movie-details?id=${id}`, {
    headers: { "auth-token": token },
  });
  return response.data;
};

const fetchWatchlistIds = async () => {
  if (user) {
    const response = await axios.post(
      `/api/watchlist-ids`,
      { user },
      {
        headers: { "auth-token": token },
      }
    );
    return response.data;
  }
};

const addMovieToWatchlist = async (movieDetails) => {
  return await axios.post(
    `/api/watchlist`,
    { movieDetails, user },
    {
      headers: { "auth-token": token },
    }
  );
};

const addMovieToWatched = async (movieDetails) => {
  return await axios.post(`/api/watched`, movieDetails, {
    headers: { "auth-token": token },
  });
};

export const useMovieDetails = (id) => {
  const queryClient = useQueryClient();
  const {
    data: movieDetails,
    isLoading: isLoadingMovieDetails,
    isError: isErrorMovieDetails,
  } = useQuery(["movie-details", id], () => fetchMovieDetails(id));

  const { data: watchlistIds } = useQuery(["watchlist-ids"], () =>
    fetchWatchlistIds()
  );

  const { mutate: mutateWatchlist } = useMutation(
    () => addMovieToWatchlist(movieDetails),
    {
      onSuccess: () => queryClient.invalidateQueries(["watchlist-ids"]),
    }
  );
  const { mutate: mutateWatched } = useMutation(
    () => addMovieToWatched(movieDetails),
    {
      onSuccess: () => queryClient.invalidateQueries(["movie-details"]),
    }
  );

  return {
    movieDetails,
    isLoadingMovieDetails,
    isErrorMovieDetails,
    watchlistIds,
    mutateWatchlist,
    mutateWatched,
  };
};
