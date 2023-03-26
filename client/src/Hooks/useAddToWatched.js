import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { getCurrentUser } from "Services/getCurrentUser";

const { user } = getCurrentUser();

const addMovieToWatched = async (movieDetails) => {
    return await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/add-to-watched`,
        {
            movieId: movieDetails.id,
            user,
        }
    );
};

export const useAddToWatched = (movieDetails) => {
    const queryClient = useQueryClient();

    const { mutate: mutateAddToWatched } = useMutation(
        () => addMovieToWatched(movieDetails),
        {
            onSuccess: () => queryClient.invalidateQueries(["watchedList"]),
        }
    );

    return {
        mutateAddToWatched,
    };
};
