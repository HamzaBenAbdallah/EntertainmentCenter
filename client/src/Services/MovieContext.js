import { createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  return <MovieContext.Provider value={{}}>{children}</MovieContext.Provider>;
};
