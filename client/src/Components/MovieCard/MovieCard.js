import { Link } from "react-router-dom";
import { Container, Poster } from "./MovieCard.style";
import NotFound from "Pictures/Image-not-found.jpg";

const MovieCard = ({ movie, noHover }) => {
  const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

  const handleError = (e) => {
    e.target.src = NotFound;
  };

  return (
    <Container noHover={noHover}>
      <Link to={`/movies/${movie?.id}`}>
        <Poster
          src={`${BASE_IMAGE_URL}${movie.poster_path}`}
          alt={movie?.title}
          onError={handleError}
        />
      </Link>
    </Container>
  );
};

export default MovieCard;
