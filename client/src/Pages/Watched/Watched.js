import { useWatched } from "./useWatched";
import MovieCard from "Components/MovieCard";
import { MovieGrid } from "./Watched.style";

const Watched = () => {
  const { watched, isLoadingWatched, isErrorWatched } = useWatched();

  if (isLoadingWatched) {
    return <div>Loading...</div>;
  }

  if (isErrorWatched) {
    return <div>Error...</div>;
  }

  return (
    <MovieGrid>
      {watched.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </MovieGrid>
  );
};

export default Watched;
