import React from "react";
import useFetch from "../../hooks/useFetch";
import SearchItemMemo from "../SearchItem/SearchItem";
import { SearchContext } from "../../App";
import "./SearchResults.css";

const SearchResults = () => {
  const searchValue = React.useContext(SearchContext);
  const [info] = useFetch(searchValue.currentTextSearch);
  const orderAscending = true;

  const sortedPhotos = React.useMemo(() => {
    if (info && info.photos) {
      return info.photos.map(photo => ({
        ...photo,
        alt: photo.alt.toLowerCase()
      })).sort((a, b) => {
        if (orderAscending) {
          return a.alt < b.alt ? -1 : 1;
        } else {
          return a.alt > b.alt ? -1 : 1;
        }
      });
    }
    return [];
  }, [info, orderAscending]);

  return (
    <div className="search-results">
      {info && info.photos ? (
        <>
          <h2 className="search-results__title">Resultados de búsqueda</h2>
          <div className="search-results__cards">
            {sortedPhotos.map(photo => (
              <SearchItemMemo key={photo.id} photos={photo} />
            ))}
          </div>
        </>
      ) : (
        <p className="search-results__no-info">Introduce un texto de búsqueda y pulsa Enter</p>
      )}
    </div>
  );
};

export default SearchResults;
