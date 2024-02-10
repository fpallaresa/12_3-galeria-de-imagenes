import React from 'react';
import './SavedResults.css';
import { SavedResultsContext } from '../../App';

const SavedResults = () => {
  const { savedResults, dispatchSavedResults } = React.useContext(SavedResultsContext);

  const handleRemoveSavedResult = (photo) => {
    dispatchSavedResults({ type: 'REMOVE_SAVED_RESULT', payload: photo });
  };

  return (
    <div className="saved-results">
      <h2 className="saved-results__title">Guardadas como favoritas</h2>
      {savedResults.length === 0 ? (
        <p className="saved-results__no-info">No tienes fotos guardadas</p>
      ) : (
        <div className="saved-results__cards">
          {savedResults.map((photo) => (
            <div className="search-results__card-container" key={photo.id}>
              <div className="search-results__card" onClick={() => handleRemoveSavedResult(photo)}>
                <img className="search-results__card-image" src={photo.src.tiny} alt={photo.alt}></img>
              </div>
              <h3 className="search-results__card-title" onClick={() => handleRemoveSavedResult(photo)}>{photo.alt}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedResults;
