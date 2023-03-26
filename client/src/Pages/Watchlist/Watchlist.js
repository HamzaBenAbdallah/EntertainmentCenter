import { useWatchlist } from "./useWatchlist";
import { useFetchWatched } from "Hooks/useFetchWatched";
import Spinner from "Components/Spinner";
import ListCard from "Components/ListCard";
import { MovieGrid } from "./Watchlist.style";

const Watchlist = () => {
    const { watchlist, isLoadingWatchlist, isErrorWatchlist } = useWatchlist();
    const { watchedList } = useFetchWatched();

    return (
        <MovieGrid>
            {isLoadingWatchlist || isErrorWatchlist ? (
                <Spinner />
            ) : (
                <>
                    {watchlist.map((movie) =>
                        watchedList?.includes(movie.id) ? (
                            <ListCard
                                key={movie.id}
                                movie={movie}
                                watchlist
                                remove
                                isInWatched
                            />
                        ) : (
                            <ListCard
                                key={movie.id}
                                movie={movie}
                                watchlist
                                remove
                            />
                        )
                    )}
                </>
            )}
        </MovieGrid>
    );
};

export default Watchlist;
