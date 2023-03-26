import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getCurrentUser } from "Services/getCurrentUser";

const { user } = getCurrentUser();

const fetchWatched = async () => {
    const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/get-watched-data`,
        { user }
    );
    return response.data;
};

export const useWatched = () => {
    const {
        data: watched,
        isLoading: isLoadingWatched,
        isError: isErrorWatched,
    } = useQuery(["get-watched-data"], fetchWatched);
    return { watched, isLoadingWatched, isErrorWatched };
};
