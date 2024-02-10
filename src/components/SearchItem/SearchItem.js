import React from 'react';
import './SearchItem.css'
import { SavedResultsContext } from '../../App';

const SearchItem = (props) => {
  const { dispatchSavedResults } = React.useContext(SavedResultsContext);

  const handleAddSavedResult = () => {
    dispatchSavedResults({ type: 'ADD_SAVED_RESULT', payload: props.photos });
  };

  return (
    <div className="search-results__card-container" key={props.photos.id}>
      <div className="search-results__card" onClick={handleAddSavedResult}>
        <img className="search-results__card-image" src={props.photos.src.tiny} alt={props.photos.alt}></img>
      </div>
      <h3 className="search-results__card-title" onClick={handleAddSavedResult}>{props.photos.alt}</h3>
    </div>
  );
};

export default SearchItem;
