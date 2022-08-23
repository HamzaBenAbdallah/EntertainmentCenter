import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchGenres = async () => {
  const { data } = await axios.get("/api/get-genre");
  return data;
};

const fetchDiscover = async (params) => {
  const { data } = await axios.get("/api/get-discover", { params });
  return data;
};

export const useDiscover = () => {
  const [genreFilter, setGenreFilter] = useState([]);

  const handleClickGenre = (genre) => {
    if (genreFilter.includes(genre)) {
      setGenreFilter(genreFilter.filter((g) => g !== genre));
    } else {
      setGenreFilter([...genreFilter, genre]);
    }
  };

  const {
    data: genres,
    isLoading: isLoadingGenres,
    isError: isErrorGenres,
  } = useQuery(["genres"], fetchGenres);

  const {
    data: discover,
    isLoading: isLoadingDiscover,
    isError: isErrorDiscover,
  } = useQuery(["discover"], fetchDiscover);

  return {
    handleClickGenre,
    genres,
    isLoadingGenres,
    isErrorGenres,
    discover,
    isLoadingDiscover,
    isErrorDiscover,
  };
};
