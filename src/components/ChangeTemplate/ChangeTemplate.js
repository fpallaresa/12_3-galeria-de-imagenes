import React from "react";
import "./ChangeTemplate.css";
import { ThemeContext } from "../../App";

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

const ChangeTemplate = () => {
  const { themeState, setThemeState } = React.useContext(ThemeContext);

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
