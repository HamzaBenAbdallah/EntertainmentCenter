import { Link } from "react-router-dom";
import { Container, Poster } from "./CarouselCard.style";
import NotFound from "../../Pictures/Image-not-found.jpg";

const CarouselCard = ({ movie }) => {
    const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

    const handleError = (e) => {
        e.target.src = NotFound;
    };

    return (
        <Container>
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

export default CarouselCard;
