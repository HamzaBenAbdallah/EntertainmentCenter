import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getCurrentUser } from "Services/getCurrentUser";

const { user } = getCurrentUser();

const fetchMovieDetails = async (id) => {
    const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/movie-details?id=${id}`
    );
    return response.data;
};

const getRating = async (id) => {
    const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/get-rating`,
        { user, movieId: id }
    );
    return response.data;
};

export const useMovieDetails = (id) => {
    const [isRateOpen, setIsRateOpen] = useState(false);

    const {
        data: movieDetails,
        isLoading: isLoadingMovieDetails,
        isError: isErrorMovieDetails,
    } = useQuery(["movie-details", id], () => fetchMovieDetails(id));

    const {
        data: rating,
        isLoading: isLoadingRating,
        isError: isErrorRating,
    } = useQuery(["rating", id], () => getRating(id));

    const handleRate = () => {
        setIsRateOpen(!isRateOpen);
    };

    const handleClose = () => {
        setIsRateOpen(false);
    };

    return {
        movieDetails,
        isLoadingMovieDetails,
        isErrorMovieDetails,
        isRateOpen,
        rating,
        isLoadingRating,
        isErrorRating,
        handleRate,
        handleClose,
    };
};
