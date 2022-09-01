import { useWatched } from "./useWatched";
import { useFetchWatchlist } from "Hooks/useFetchWatchlist";
import Spinner from "Components/Spinner";
import ListCard from "Components/ListCard";
import { MovieGrid } from "./Watched.style";

const Watched = () => {
  const { watched, isLoadingWatched, isErrorWatched } = useWatched();
  const { watchlistList } = useFetchWatchlist();

  return (
    <MovieGrid>
      {isLoadingWatched || isErrorWatched ? (
        <Spinner />
      ) : (
        <>
          {watched.map((movie) =>
            watchlistList?.includes(movie.id) ? (
              <ListCard
                key={movie.id}
                movie={movie}
                watched
                remove
                isInWatchlist
              />
            ) : (
              <ListCard key={movie.id} movie={movie} watched remove />
            )
          )}
        </>
      )}
    </MovieGrid>
  );
};

export default Watched;
