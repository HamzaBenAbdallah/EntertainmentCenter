import { useEffect, useReducer } from "react";
import axios from "axios";

const ACTIONS = {
  API_REQUEST: "api-request",
  FETCH_DATA: "fetch-data",
  ERROR: "error",
};

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.API_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ACTIONS.FETCH_DATA:
      return {
        ...state,
        data: payload.data,
        loading: false,
      };
    case ACTIONS.ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const useFetch = (url) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: ACTIONS.API_REQUEST });
    const fetch = async () => {
      try {
        const response = await axios.get(url);
        dispatch({ type: ACTIONS.FETCH_DATA, payload: response.data });
      } catch (error) {
        dispatch({ type: ACTIONS.ERROR, payload: error });
      }
    };
    fetch();
  }, [url]);

  return state;
};
