import { useState } from "react";
import { flushSync } from "react-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchGenres = async () => {
  const { data } = await axios.get("/api/get-genre");
  return data;
};

const fetchDiscover = async (params) => {
  const { data } = await axios.post("/api/get-discover", { params });
  return data;
};

export const useDiscover = () => {
  const [genreFilter, setGenreFilter] = useState([]);
  const [sortFilter, setSortFilter] = useState("popularity.desc");

  const handleClickGenre = (genre) => {
    flushSync(() => {
      if (genreFilter.includes(genre)) {
        setGenreFilter(genreFilter.filter((g) => g !== genre));
      } else {
        setGenreFilter([...genreFilter, genre]);
      }
    });

    refetchDiscover();
  };

  const handleChangeSort = (e) => {
    flushSync(() => {
      setSortFilter(e.target.value);
    });

    refetchDiscover();
  };

  let params = {
    with_genres: genreFilter.join(","),
    sort_by: sortFilter,
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
    refetch: refetchDiscover,
  } = useQuery(["discover"], () => fetchDiscover(params));

  return {
    genres,
    isLoadingGenres,
    isErrorGenres,
    discover,
    isLoadingDiscover,
    isErrorDiscover,
    handleClickGenre,
    handleChangeSort,
  };
};
