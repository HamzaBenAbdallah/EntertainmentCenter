import { Icon } from "@iconify/react";
import { useSearchBar } from "./useSearchBar";
import { Wrapper, Input, Remove } from "./SearchBar.style";

const SearchBar = () => {
  const { searchTerm, handleSubmit, handleChange, handleClick } =
    useSearchBar();

  return (
    <Wrapper>
      <Icon
        icon="healthicons:magnifying-glass-outline"
        color="#abb7c4"
        width="30"
      />
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Search for a movie"
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
      <Remove className={searchTerm ? "show" : ""} onClick={handleClick}>
        <Icon icon="feather:x-circle" color="#abb7c4" width="30" />
      </Remove>
    </Wrapper>
  );
};

export default SearchBar;
