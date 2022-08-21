import { useWatched } from "./useWatched";
import ListCard from "Components/ListCard";
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
        <ListCard key={movie.id} movie={movie} watched remove />
      ))}
    </MovieGrid>
  );
};

export default Watched;
