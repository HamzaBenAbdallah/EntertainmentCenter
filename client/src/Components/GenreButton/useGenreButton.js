import { useState } from "react";

export const useGenreButton = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };

  return {
    isActive,
    handleClick,
  };
};
