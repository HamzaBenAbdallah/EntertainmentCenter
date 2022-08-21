import { useParams } from "react-router-dom";
import { useSearchResults } from "./useSearchResults";
import ListCard from "Components/ListCard";
import { Wrapper, Title, MovieList } from "./SearchResults.style";

const SearchResults = () => {
  const { searchTerm } = useParams();
  const { searchResults, isLoadingSearchResults, isErrorSearchResults } =
    useSearchResults();

  if (isLoadingSearchResults) {
    return <div>Loading...</div>;
  }

  if (isErrorSearchResults) {
    return <div>Error...</div>;
  }

  if (!searchResults) {
    return <div>No results found</div>;
  }

  return (
    <Wrapper>
      <Title>Search Results for "{searchTerm}"</Title>
      <MovieList>
        {searchResults.map((movie) => (
          <ListCard key={movie.id} movie={movie} />
        ))}
      </MovieList>
    </Wrapper>
  );
};

export default SearchResults;
