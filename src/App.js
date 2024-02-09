import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SearchResults from './components/SearchResults/SearchResults';

export const SearchContext = React.createContext();
export const ThemeContext = React.createContext();

const themes = {
  basic: {
    name: "basic",
    background: "#FFF",
    fontColor: "#000",
  },
  fantasia: {
    name: "fantasia",
    background: "linear-gradient(52deg, rgba(40,237,98,1) 0%, rgba(199,15,155,1) 29%, rgba(160,6,155,1) 62%, rgba(0,212,255,1) 100%)",
    fontColor: "#FFF",
  }
}

function App() {
  const [searchState, setSearchState] = React.useState("");
  const [themeState, setThemeState] = React.useState(themes.basic);

  const updateSearchInfo = (searchText) => {
    setSearchState(searchText);
  }

  const searchValue = {
    currentTextSearch: searchState,
    updateSearchInfo: updateSearchInfo,
  }

  return (
    <SearchContext.Provider value={searchValue}>
      <ThemeContext.Provider value={{themeState, setThemeState}}>
      <div className="App" style={{ background: themeState.background, color: themeState.fontColor }}>
          <Header />
          <SearchResults/>
        </div>
      </ThemeContext.Provider>
    </SearchContext.Provider>
  );
}

export default App;