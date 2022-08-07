import { useTrending } from "./useTrending";
import MovieCard from "Components/MovieCard";
import { MovieGrid } from "./Trending.style";

const Trending = () => {
  const { moviesList, isLoadingMovies, isErrorMovies } = useTrending();

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

export default Trending;
