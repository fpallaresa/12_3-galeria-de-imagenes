import React from "react";
import "./Search.css";
import { SearchContext } from "../../App";

const Search = () => {
  const searchValue = React.useContext(SearchContext);
  const [searchText, setSearchText] = React.useState("");

  const handleInputChange = (event) => {
    const newText = event.target.value;
    setSearchText(newText);
    if (newText.trim() !== "") {
      searchValue.updateSearchInfo(newText);
    }
  };

  console.log("Estoy añadiendo texto en el input:" + searchText);

  return (
    <div className="header__search">
      <input
        className="header__search-input"
        placeholder="Introduce un texto de búsqueda"
        type="text"
        defaultValue={searchText}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Search;
