import { useEffect } from "react";

export const useSideScroller = (listRef) => {
  let slider = null;

  useEffect(() => {
    slider = listRef.current;
  }, [slider]);

  const btnPrev = () => {
    if (slider) {
      slider.scrollBy({
        top: 0,
        left: -slider.offsetWidth,
        behavior: "smooth",
      });
    }
  };
  const btnNext = () => {
    if (slider) {
      slider.scrollBy({
        top: 0,
        left: slider.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return { btnPrev, btnNext };
};
