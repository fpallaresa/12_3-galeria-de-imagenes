import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SearchResults from "./components/SearchResults/SearchResults";
import SavedResults from "./components/SavedResults/SavedResults";

export const SearchContext = React.createContext();
export const ThemeContext = React.createContext();
export const SavedResultsContext = React.createContext();

const themes = {
  basic: {
    name: "basic",
    background: "#FFF",
    fontColor: "#000",
  },
  fantasia: {
    name: "fantasia",
    background:
      "linear-gradient(52deg, rgba(40,237,98,1) 0%, rgba(199,15,155,1) 29%, rgba(160,6,155,1) 62%, rgba(0,212,255,1) 100%)",
    fontColor: "#FFF",
  },
};

const savedResultsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_SAVED_RESULT":
      
      if (state.find(item => item.id === action.payload.id)) {
        return state; 
      }
      
      const newState = [...state, action.payload];
      localStorage.setItem("savedResults", JSON.stringify(newState));
      return newState;

    case "REMOVE_SAVED_RESULT":
      const updatedSavedResults = state.filter(
        (item) => item.id !== action.payload.id
      );
      
      localStorage.setItem("savedResults", JSON.stringify(updatedSavedResults));
      return updatedSavedResults;
      
    default:
      return state;
  }
};



function App() {
  const [searchState, setSearchState] = React.useState("");
  const [themeState, setThemeState] = React.useState(themes.basic);
  const [savedResults, dispatchSavedResults] = React.useReducer(
    savedResultsReducer,
    JSON.parse(localStorage.getItem("savedResults")) || []
  );

  const updateSearchInfo = (searchText) => {
    setSearchState(searchText);
  };

  const searchValue = {
    currentTextSearch: searchState,
    updateSearchInfo: updateSearchInfo,
  };

  return (
    <SearchContext.Provider value={searchValue}>
      <ThemeContext.Provider value={{ themes, themeState, setThemeState }}>
        <div className="App" style={{ background: themeState.background, color: themeState.fontColor, }}>

          <Header></Header>

          <SavedResultsContext.Provider value={{ savedResults, dispatchSavedResults }}>

            <SearchResults></SearchResults>
            <SavedResults></SavedResults>

          </SavedResultsContext.Provider>
        </div>
      </ThemeContext.Provider>
    </SearchContext.Provider>
  );
}

export default App;
