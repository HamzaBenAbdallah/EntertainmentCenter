import { useRef } from "react";
import { useSideScroller } from "./useSideScroller";
import {
  Wrapper,
  ListContainer,
  Button,
  ChevronLeft,
  ChevronRight,
} from "./SideScroller.style";

const SideScroller = ({ children }) => {
  const listRef = useRef(null);
  const { btnPrev, btnNext } = useSideScroller(listRef);

  return (
    <Wrapper>
      <Button onClick={btnPrev}>
        <ChevronLeft />
      </Button>
      <ListContainer className="slider" ref={listRef}>
        {children}
      </ListContainer>
      <Button onClick={btnNext}>
        <ChevronRight />
      </Button>
    </Wrapper>
  );
};

export default SideScroller;
