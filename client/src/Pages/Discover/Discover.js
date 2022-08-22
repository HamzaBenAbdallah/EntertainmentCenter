import { useDiscover } from "./useDiscover";
import MovieCard from "Components/MovieCard";
import { MovieGrid } from "./Discover.style";

const Discover = () => {
  const { moviesList, isLoadingMovies, isErrorMovies } = useDiscover();

  if (isLoadingMovies) {
    return <div>Loading...</div>;
  }

  if (isErrorMovies) {
    return <div>Error...</div>;
  }

  return (
    <MovieGrid>
      {moviesList?.map((movie, index) => {
        return <MovieCard key={index} movie={movie} />;
      })}
    </MovieGrid>
  );
};

export default Discover;
