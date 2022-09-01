import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchMovieDetails = async (id) => {
  const response = await axios.get(`/api/movie-details?id=${id}`);
  return response.data;
};

export const useMovieDetails = (id) => {
  const [isRateOpen, setIsRateOpen] = useState(false);

  const {
    data: movieDetails,
    isLoading: isLoadingMovieDetails,
    isError: isErrorMovieDetails,
  } = useQuery(["movie-details", id], () => fetchMovieDetails(id));

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
    handleRate,
    handleClose,
  };
};
