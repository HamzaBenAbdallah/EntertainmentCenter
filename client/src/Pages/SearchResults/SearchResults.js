import { useParams } from "react-router-dom";
import { useSearchResults } from "./useSearchResults";
import Spinner from "Components/Spinner";
import ListCard from "Components/ListCard";
import { Wrapper, Title, MovieList } from "./SearchResults.style";

const SearchResults = () => {
  const { searchTerm } = useParams();
  const { searchResults, isLoadingSearchResults, isErrorSearchResults } =
    useSearchResults();

  if (searchResults.length === 0) {
    return (
      <Wrapper>
        <Title>No results found for "{searchTerm}"</Title>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {isLoadingSearchResults || isErrorSearchResults ? (
        <Spinner />
      ) : (
        <>
          <Title>Search Results for "{searchTerm}"</Title>
          <MovieList>
            {searchResults.map((movie) => (
              <ListCard key={movie.id} movie={movie} watchlist watched />
            ))}
          </MovieList>
        </>
      )}
    </Wrapper>
  );
};

export default SearchResults;
