import { useMain } from "./useMain";
import MovieCard from "Components/MovieCard";
import ListContainer from "Components/SideScroller";
import { MainWrapper } from "./Main.style";

const Main = () => {
  const { moviesList, isLoadingMovies, isErrorMovies } = useMain();

  if (isLoadingMovies) {
    return <div>Loading...</div>;
  }

  if (isErrorMovies) {
    return <div>Error...</div>;
  }

  return (
    <MainWrapper>
      <div>
        <ListContainer>
          {moviesList?.map((movie, index) => {
            return <MovieCard key={index} movie={movie} />;
          })}
        </ListContainer>
      </div>
    </MainWrapper>
  );
};

export default Main;
