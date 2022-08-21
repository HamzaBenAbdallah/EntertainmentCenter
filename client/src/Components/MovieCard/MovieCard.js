import { Link } from "react-router-dom";
import { Container, Poster } from "./MovieCard.style";
import NotFound from "Pictures/Image-not-found.jpg";

const MovieCard = ({ movie }) => {
  const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";
  const image = movie?.poster_path
    ? `${BASE_IMAGE_URL}${movie.poster_path}`
    : NotFound;

  return (
    <Container>
      <Link to={`/movies/${movie.id}`}>
        <Poster src={image} alt={movie.title} />
      </Link>
    </Container>
  );
};

export default MovieCard;
