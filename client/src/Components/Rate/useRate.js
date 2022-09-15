import { useState } from "react";
import axios from "axios";
import { getCurrentUser } from "Services/getCurrentUser";

const { user } = getCurrentUser();

const addRating = async (ratingValue, movieId) => {
  return await axios.post("/api/add-rating", {
    user,
    ratingValue,
    movieId,
  });
};

export const useRate = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const handleClick = (ratingValue, movieId, close) => {
    setRating(ratingValue);
    addRating(ratingValue, movieId);
    close();
  };

  const handleMouseEnter = (ratingValue) => {
    setHover(ratingValue);
  };

  const handleMouseLeave = () => {
    setHover(null);
  };

  return { rating, hover, handleClick, handleMouseEnter, handleMouseLeave };
};
