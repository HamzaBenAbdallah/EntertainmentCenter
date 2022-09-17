import { useRate } from "./useRate";
import { FaStar } from "react-icons/fa";
import { Container, Rating, Star } from "./Rate.style";

const Rate = ({ isOpen, close, movieId, initialRating }) => {
  const { rating, hover, handleClick, handleMouseEnter, handleMouseLeave } =
    useRate();

  if (!isOpen) {
    return null;
  }

  console.log("initial: ", initialRating);
  console.log("rating: ", rating);

  return (
    <Container onClick={close}>
      <Rating
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {[...Array(10)].map((star, index) => {
          const ratingValue = index + 1;
          return (
            <label key={index}>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => handleClick(ratingValue, movieId, close)}
              />
              <Star>
                <FaStar
                  size={100}
                  color={
                    ratingValue <= (hover || rating || initialRating)
                      ? "#ffc107"
                      : "#e4e5e9"
                  }
                  onMouseEnter={() => handleMouseEnter(ratingValue)}
                  onMouseLeave={handleMouseLeave}
                />
              </Star>
            </label>
          );
        })}
      </Rating>
    </Container>
  );
};

export default Rate;
