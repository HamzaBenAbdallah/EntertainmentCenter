import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const fetchSearchResults = async (searchTerm) => {
  const { data } = await axios.get(`/api/search-movies?query=${searchTerm}`);
  return data;
};

export const useSearchResults = () => {
  const { searchTerm } = useParams();
  const [searchResults, setSearchResults] = useState(null);
  const [isLoadingSearchResults, setIsLoadingSearchResults] = useState(true);
  const [isErrorSearchResults, setIsErrorSearchResults] = useState(false);

  const fetchData = async () => {
    try {
      const data = await fetchSearchResults(searchTerm);
      setSearchResults(data);
      setIsLoadingSearchResults(false);
    } catch (error) {
      setIsErrorSearchResults(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchTerm]);

  return {
    searchResults,
    isLoadingSearchResults,
    isErrorSearchResults,
  };
};
