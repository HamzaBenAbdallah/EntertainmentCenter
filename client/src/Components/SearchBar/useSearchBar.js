import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm("");
    searchTerm && navigate(`/search/${searchTerm}`);
  };

  return {
    handleChange,
    handleSubmit,
    searchTerm,
  };
};
