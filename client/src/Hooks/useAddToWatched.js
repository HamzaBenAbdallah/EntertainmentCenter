import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { getCurrentUser } from "Services/getCurrentUser";

const { user } = getCurrentUser();

const addMovieToWatched = async (movieDetails) => {
  return await axios.post(`/api/add-to-watched`, { movieDetails, user });
};

export const useAddToWatched = (movieDetails) => {
  const queryClient = useQueryClient();

  const { mutate: mutateWatched } = useMutation(
    () => addMovieToWatched(movieDetails),
    {
      onSuccess: () => queryClient.invalidateQueries(["watchedList"]),
    }
  );

  return {
    mutateWatched,
  };
};
