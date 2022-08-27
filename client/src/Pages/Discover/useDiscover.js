import { useState } from "react";
import { flushSync } from "react-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchGenres = async () => {
  const { data } = await axios.get("/api/get-genre");
  return data;
};

const fetchCertification = async () => {
  const { data } = await axios.get("/api/get-certification");
  return data;
};

const fetchDiscover = async (params) => {
  const { data } = await axios.post("/api/get-discover", { params });
  return data;
};

export const useDiscover = () => {
  const [sortFilter, setSortFilter] = useState("popularity.desc");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState(new Date());
  const [genreFilter, setGenreFilter] = useState([]);
  const [certificationFilter, setCertificationFilter] = useState([]);

  const handleChangeSort = (e) => {
    flushSync(() => {
      setSortFilter(e.target.value);
    });

    refetchDiscover();
  };

  const handleSelectFromDate = (date) => {
    flushSync(() => {
      setFromDate(date);
    });

    refetchDiscover();
  };

  const handleSelectToDate = (date) => {
    flushSync(() => {
      setToDate(date);
    });
    refetchDiscover();
  };

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

  const handleClickCertification = (certification) => {
    flushSync(() => {
      if (certificationFilter.includes(certification)) {
        setCertificationFilter(
          certificationFilter.filter((c) => c !== certification)
        );
      } else {
        setCertificationFilter([...certificationFilter, certification]);
      }
    });

    refetchDiscover();
  };

  let params = {
    with_genres: genreFilter.join(","),
    sort_by: sortFilter,
    certification_country: "US",
    certification: certificationFilter.join(","),
    primary_release_date_gte: fromDate,
    primary_release_date_lte: toDate,
  };

  const {
    data: discover,
    isLoading: isLoadingDiscover,
    isError: isErrorDiscover,
    refetch: refetchDiscover,
  } = useQuery(["discover"], () => fetchDiscover(params));

  const {
    data: genres,
    isLoading: isLoadingGenres,
    isError: isErrorGenres,
  } = useQuery(["genres"], fetchGenres);

  const {
    data: certification,
    isLoading: isLoadingCertification,
    isError: isErrorCertification,
  } = useQuery(["certification"], fetchCertification);

  return {
    discover,
    isLoadingDiscover,
    isErrorDiscover,
    fromDate,
    toDate,
    genres,
    isLoadingGenres,
    isErrorGenres,
    certification,
    isLoadingCertification,
    isErrorCertification,
    handleChangeSort,
    handleSelectFromDate,
    handleSelectToDate,
    handleClickGenre,
    handleClickCertification,
  };
};
