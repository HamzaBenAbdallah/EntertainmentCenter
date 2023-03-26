import { useAddToWatchlist } from "Hooks/useAddToWatchlist";
import { useAddToWatched } from "Hooks/useAddToWatched";
import { useRemoveFromWatchlist } from "Hooks/useRemoveFromWatchlist";
import { useRemoveFromWatched } from "Hooks/useRemoveFromWatched";
import CircularProgress from "Components/CircularProgress";
import SquareButton from "Components/SquareButton";
import NotFound from "Pictures/Image-not-found.jpg";
import {
  Container,
  StyledLink,
  Poster,
  Wrapper,
  Details,
  Info,
  Title,
  Overview,
  Controls,
} from "./ListCard.style";

const ListCard = ({
  movie,
  watchlist,
  isInWatchlist,
  watched,
  isInWatched,
  remove,
}) => {
  const { mutateAddToWatchlist } = useAddToWatchlist(movie);
  const { mutateAddToWatched } = useAddToWatched(movie);
  const { mutateRemoveFromWatchlist } = useRemoveFromWatchlist(movie);
  const { mutateRemoveFromWatched } = useRemoveFromWatched(movie);

  const handleAddMovieToWatchlist = () => {
    mutateAddToWatchlist(movie);
  };

  const handleAddMovieToWatched = () => {
    mutateAddToWatched(movie);
  };

  const handleRemoveMovie = () => {
    if (watchlist) {
      mutateRemoveFromWatchlist(movie);
    }
    if (watched) {
      mutateRemoveFromWatched(movie);
    }
  };

  const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";
  const image = movie?.poster_path
    ? `${BASE_IMAGE_URL}${movie.poster_path}`
    : NotFound;

  return (
    <Container>
      <StyledLink to={`/movies/${movie?.id}`}>
        <Poster src={image} alt={movie?.title} />
      </StyledLink>
      <Wrapper>
        <Details>
          <Info>
            <CircularProgress value={Math.round(movie?.vote_average * 10)} />
            <Title>
              <StyledLink to={`/movies/${movie?.id}`}>
                <h3>{movie?.title}</h3>
              </StyledLink>
              <p>{movie?.release_date}</p>
            </Title>
          </Info>
          <Overview>{movie?.overview}</Overview>
        </Details>
        <Controls>
          <SquareButton type="rating" />
          {watchlist && (
            <SquareButton
              type="watched"
              disabled={isInWatched}
              click={handleAddMovieToWatched}
            />
          )}
          {watched && (
            <SquareButton
              type="watchlist"
              disabled={isInWatchlist}
              click={handleAddMovieToWatchlist}
            />
          )}
          {remove && <SquareButton type="remove" click={handleRemoveMovie} />}
        </Controls>
      </Wrapper>
    </Container>
  );
};

export default ListCard;
