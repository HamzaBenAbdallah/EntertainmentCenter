import { useState } from "react";
import axios from "axios";

const fetchSearchResults = async (searchTerm) => {
  if (!searchTerm) {
    return [];
  }
  const response = await axios.get(`/api/search-movies?query=${searchTerm}`);
  return response;
};

export const useSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const results = await fetchSearchResults(searchTerm);
    setSearchResults(results.data);
    setSearchTerm("");
  };

  return {
    handleChange,
    handleSubmit,
    searchTerm,
    searchResults,
  };
};
