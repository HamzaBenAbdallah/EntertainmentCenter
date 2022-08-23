import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { getCurrentUser } from "Services/getCurrentUser";

const { user } = getCurrentUser();

const RemoveMovieFromWatched = async (movieDetails) => {
  return await axios.patch(`/api/remove-from-watched`, {
    movieId: movieDetails.id,
    user,
  });
};

export const useRemoveFromWatched = (movieDetails) => {
  const queryClient = useQueryClient();

  const { mutate: mutateRemoveFromWatched } = useMutation(
    () => RemoveMovieFromWatched(movieDetails),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["get-watched-data"]);
        queryClient.invalidateQueries(["watchlistList"]);
        queryClient.invalidateQueries(["watchedList"]);
      },
    }
  );

  return {
    mutateRemoveFromWatched,
  };
};
