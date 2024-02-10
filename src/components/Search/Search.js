import React from "react";
import "./Search.css";
import { SearchContext } from "../../App";

const Search = () => {
  const searchValue = React.useContext(SearchContext);
  const [searchText, setSearchText] = React.useState("");

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (searchText.trim() !== "") {
        searchValue.updateSearchInfo(searchText);
      }
    }
  };

  return (
    <div className="header__search">
      <input
        className="header__search-input"
        placeholder="Introduce un texto de búsqueda"
        type="text"
        value={searchText}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default Search;
