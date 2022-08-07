import { useTrending } from "./useTrending";
import Card from "Components/Card";
import { MovieGrid } from "./Trending.style";

const Trending = () => {
  const { moviesList, isLoadingMovies, errorMovies } = useTrending();

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

export default Trending;
