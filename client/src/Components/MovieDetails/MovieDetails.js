import { useParams } from "react-router-dom";
import { useMovieDetails } from "./useMovieDetails";
import {} from "./MovieDetails.style";

const CardDetails = () => {
  const { id } = useParams();
  const {
    movieDetails,
    isLoadingMovieDetails,
    isErrorMovieDetails,
    errorMovieDetails,
  } = useMovieDetails(id);

  if (isLoadingMovieDetails) {
    return <div>Loading...</div>;
  }

  if (isErrorMovieDetails) {
    console.log(errorMovieDetails);
    return <div>Error</div>;
  }

  return <div>{movieDetails?.title}</div>;
};

export default CardDetails;
