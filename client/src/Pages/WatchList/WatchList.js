import { useWatchlist } from "./useWatchlist";
import ListCard from "Components/ListCard";
import { MovieGrid } from "./Watchlist.style";

const Watchlist = () => {
  const { watchlist, isLoadingWatchlist, isErrorWatchlist } = useWatchlist();

  if (isLoadingWatchlist) {
    return <div>Loading...</div>;
  }

  if (isErrorWatchlist) {
    return <div>Error...</div>;
  }

  return (
    <MovieGrid>
      {watchlist.map((movie) => (
        <ListCard key={movie.id} movie={movie} />
      ))}
    </MovieGrid>
  );
};

export default Watchlist;
