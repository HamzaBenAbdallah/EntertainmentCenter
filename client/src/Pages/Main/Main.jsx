import { MovieContext } from "Services/MovieContext";
import { useContext } from "react";
import Card from "Components/Card";
import { MovieGrid } from "./Main.style";

const Main = () => {
  const { moviesList, isLoadingMovies } = useContext(MovieContext);

  if (isLoadingMovies) {
    return <div>Loading...</div>;
  }

  return (
    <MovieGrid>
      {moviesList?.map((movie, index) => {
        return <Card key={index} movie={movie} />;
      })}
    </MovieGrid>
  );
};

export default Main;
