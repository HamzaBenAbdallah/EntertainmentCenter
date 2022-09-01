import { useRate } from "./useRate";
import { FaStar } from "react-icons/fa";
import { Container, Star } from "./Rate.style";

const Rate = () => {
  const { rating, hover, handleClick, handleMouseEnter, handleMouseLeave } =
    useRate();

  return (
    <Container>
      {[...Array(10)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => handleClick(ratingValue)}
            />
            <Star>
              <FaStar
                size={100}
                color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                onMouseEnter={() => handleMouseEnter(ratingValue)}
                onMouseLeave={handleMouseLeave}
              />
            </Star>
          </label>
        );
      })}
    </Container>
  );
};

export default Rate;
