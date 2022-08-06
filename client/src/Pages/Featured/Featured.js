import { MovieContext } from "Services/MovieContext";
import { useContext } from "react";
import Card from "Components/Card";
import { MovieGrid } from "./Featured.style";

const Featured = () => {
  const { moviesList, isLoadingMovies, errorMovies } = useContext(MovieContext);

  if (isLoadingMovies) {
    return <div>Loading...</div>;
  }

  if (errorMovies) {
    return <div>Error...</div>;
  }

  return (
    <MovieGrid>
      {moviesList?.map((movie, index) => {
        return <Card key={index} movie={movie} />;
      })}
    </MovieGrid>
  );
};

export default Featured;
