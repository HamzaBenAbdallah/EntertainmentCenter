import { useState } from "react";

export const useFilterButton = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };

  return {
    isActive,
    handleClick,
  };
};
