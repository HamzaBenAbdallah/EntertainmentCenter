import { MovieContext } from "Services/MovieContext";
import { useContext } from "react";
import Card from "Components/Card";
import { MovieGrid } from "./Main.style";

const Main = () => {
  const { movies, isLoading } = useContext(MovieContext);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <MovieGrid>
      {movies?.map((movie, index) => {
        return <Card key={index} movie={movie} />;
      })}
    </MovieGrid>
  );
};

export default Main;
