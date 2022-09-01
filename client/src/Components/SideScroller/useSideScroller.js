export const useSideScroller = (listRef) => {
  const btnPrev = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        top: 0,
        left: -listRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };
  const btnNext = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        top: 0,
        left: listRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return { btnPrev, btnNext };
};
