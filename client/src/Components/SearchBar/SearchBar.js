import { useSearchBar } from "./useSearchBar";
import { SearchBarContainer } from "./SearchBar.style";

const SearchBar = () => {
  const { handleSubmit, handleChange, searchTerm, searchResults } =
    useSearchBar();

  console.log(searchResults);

  return (
    <form onSubmit={handleSubmit}>
      <SearchBarContainer
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchBar;
