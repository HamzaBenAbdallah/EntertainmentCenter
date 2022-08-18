import { Link } from "react-router-dom";
import { Container, Poster } from "./MovieCard.style";

const MovieCard = ({ movie }) => {
  const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

  return (
    <Container>
      <Link to={`/movies/${movie.id}`}>
        <Poster src={BASE_IMAGE_URL + movie.poster_path} alt={movie.title} />
      </Link>
    </Container>
  );
};

export default MovieCard;
