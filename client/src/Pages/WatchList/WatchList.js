import { useWatchlist } from "./useWatchlist";
import { useFetchWatched } from "Hooks/useFetchWatched";
import ListCard from "Components/ListCard";
import { MovieGrid } from "./WatchList.style";

const Watchlist = () => {
  const { watchlist, isLoadingWatchlist, isErrorWatchlist } = useWatchlist();
  const { watchedList } = useFetchWatched();

  if (isLoadingWatchlist) {
    return <div>Loading...</div>;
  }

  if (isErrorWatchlist) {
    return <div>Error...</div>;
  }

  return (
    <MovieGrid>
      {watchlist.map((movie) =>
        watchedList?.includes(movie.id) ? (
          <ListCard key={movie.id} movie={movie} watchlist remove isWatched />
        ) : (
          <ListCard key={movie.id} movie={movie} watchlist remove />
        )
      )}
    </MovieGrid>
  );
};

export default Watchlist;
