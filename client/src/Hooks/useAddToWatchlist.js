import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { getCurrentUser } from "Services/getCurrentUser";

const { user } = getCurrentUser();

const addMovieToWatchlist = async (movieDetails) => {
  return await axios.post(`/api/add-to-watchlist`, {
    movieId: movieDetails.id,
    user,
  });
};

export const useAddToWatchlist = (movieDetails) => {
  const queryClient = useQueryClient();

  const { mutate: mutateAddToWatchlist } = useMutation(
    () => addMovieToWatchlist(movieDetails),
    {
      onSuccess: () => queryClient.invalidateQueries(["watchlistList"]),
    }
  );

  return {
    mutateAddToWatchlist,
  };
};
