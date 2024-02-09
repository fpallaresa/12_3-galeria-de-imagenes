import React from "react";
import "./SearchItem.css";

const SearchItem = (props) => { 

    return (
        <div className="search-results__card-container" key={props.photos.id}>
            <div className="search-results__card">
                <img className="search-results__card-image" src={props.photos.src.tiny} alt={props.photos.alt}></img>
            </div>
            <h3 className="search-results__card-title">{props.photos.alt}</h3>
        </div>
    );
}

const SearchItemMemo = React.memo(SearchItem);

export default SearchItemMemo;