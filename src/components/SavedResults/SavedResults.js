import React from "react";
import useFetch from "../../hooks/useFetch";
import SearchItemMemo from "../SearchItem/SearchItem";
import "./SavedResults.css";

const SavedResults = () => {
    const searchText = "taylor";
    const [info] = useFetch(searchText);

    return (
        <div className="saved-results">
            <p className="saved-results__no-info">No tienes fotos guardadas</p>
            <h2 className="saved-results__title">Guardadas como favoritas</h2>
            <div className="saved-results__cards">
                {info &&
                info.photos &&
                info.photos.map((photo) => (
                <SearchItemMemo key={photo.id} photos={photo}></SearchItemMemo>
                ))}
            </div>
        </div>
    );
};

export default SavedResults;
