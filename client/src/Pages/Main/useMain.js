import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchCurrentlyPlayingMovies = async () => {
  const { data } = await axios.get(`/api/currently-playing-movies`);
  return data;
};

const fetchUpcomingMovies = async () => {
  const { data } = await axios.get(`/api/upcoming-movies`);
  return data;
};

const fetchTrendingMovies = async () => {
  const { data } = await axios.get(`/api/trending-movies`);
  return data;
};

const fetchTopRatedMovies = async () => {
  const { data } = await axios.get(`/api/top-rated-movies`);
  return data;
};

export const useMain = () => {
  const {
    data: currentlyPlayingMovies,
    isLoading: isLoadingCurrentlyPlayingMovies,
    isError: isErrorCurrentlyPlayingMovies,
  } = useQuery(["currently-playing-movies"], fetchCurrentlyPlayingMovies);

  const {
    data: trendingMovies,
    isLoading: isLoadingTrendingMovies,
    isError: isErrorTrendingMovies,
  } = useQuery(["trending-movies"], fetchTrendingMovies);

  const {
    data: topRatedMovies,
    isLoading: isLoadingTopRatedMovies,
    isError: isErrorTopRatedMovies,
  } = useQuery(["top-rated-movies"], fetchTopRatedMovies);

  const {
    data: upcomingMovies,
    isLoading: isLoadingUpcomingMovies,
    isError: isErrorUpcomingMovies,
  } = useQuery(["upcoming-movies"], fetchUpcomingMovies);

  return {
    currentlyPlayingMovies,
    isLoadingCurrentlyPlayingMovies,
    isErrorCurrentlyPlayingMovies,
    trendingMovies,
    isLoadingTrendingMovies,
    isErrorTrendingMovies,
    topRatedMovies,
    isLoadingTopRatedMovies,
    isErrorTopRatedMovies,
    upcomingMovies,
    isLoadingUpcomingMovies,
    isErrorUpcomingMovies,
  };
};
