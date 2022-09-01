import { useState } from "react";

export const useRate = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const handleClick = (ratingValue) => {
    setRating(ratingValue);
  };

  const handleMouseEnter = (ratingValue) => {
    setHover(ratingValue);
  };

  const handleMouseLeave = () => {
    setHover(null);
  };

  return { rating, hover, handleClick, handleMouseEnter, handleMouseLeave };
};
