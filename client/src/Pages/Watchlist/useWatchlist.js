import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getCurrentUser } from "Services/getCurrentUser";

const { user } = getCurrentUser();

const fetchWatchlist = async () => {
    const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/get-watchlist-data`,
        { user }
    );
    return response.data;
};

export const useWatchlist = () => {
    const {
        data: watchlist,
        isLoading: isLoadingWatchlist,
        isError: isErrorWatchlist,
    } = useQuery(["get-watchlist-data"], fetchWatchlist);
    return { watchlist, isLoadingWatchlist, isErrorWatchlist };
};
