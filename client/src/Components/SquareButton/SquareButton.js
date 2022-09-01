import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";

import { Container } from "./SquareButton.style";

const SquareButton = ({ children, disabled, click, type }) => {
  return (
    <Container disabled={disabled} onClick={click}>
      {type === "rating" ? (
        <>
          <FaRegStar size="1.75rem" />
          <span>Your rating</span>
        </>
      ) : type === "watched" ? (
        <>
          <IoAddCircleOutline size="1.75rem" />
          <span>Add to watched</span>
        </>
      ) : type === "watchlist" ? (
        <>
          <IoAddCircleOutline size="1.75rem" />
          <span>Add to watchlist</span>
        </>
      ) : type === "remove" ? (
        <>
          <IoRemoveCircleOutline size="1.75rem" />
          <span>Remove</span>
        </>
      ) : (
        <> </>
      )}
      {children}
    </Container>
  );
};

export default SquareButton;
