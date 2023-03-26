import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getCurrentUser } from "Services/getCurrentUser";

const { user } = getCurrentUser();

const fetchWatchlist = async () => {
    if (user) {
        const response = await axios.post(
            `${process.env.REACT_APP_SERVER_URL}/get-watchlist`,
            { user }
        );
        return response.data;
    }
};

export const useFetchWatchlist = () => {
    const { data: watchlistList } = useQuery(["watchlistList"], fetchWatchlist);
    return { watchlistList };
};
