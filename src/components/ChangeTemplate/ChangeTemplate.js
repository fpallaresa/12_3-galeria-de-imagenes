import React from "react";
import "./ChangeTemplate.css";
import { ThemeContext } from "../../App";


const ChangeTemplate = () => {
  const {themes, themeState, setThemeState } = React.useContext(ThemeContext);

  const toggleTheme = () => {
    setThemeState(themeState.name === "basic" ? themes.fantasia : themes.basic);
  };

  return (
    <button
      className="header__button"
      onClick={toggleTheme}
    >
      Cambiar tema
    </button>
  );
};

export default ChangeTemplate;
