import React from "react";
import Button from "@material-ui/core/Button";
import { useDarkMode } from "../hooks/useDarkMode";
import Players from "./players";

export default function Title() {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = (event) => {
    event.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div className='cardRoot'>
        <div className="navbar">
        <div className="dark-mode__toggle">
          <div
            onClick={toggleMode}
            className={darkMode ? "toggle toggled" : "toggle"}
          />
        </div>
        <h2 className="title-header">Women Soccer Players' List</h2>
      </div>
      
    </div>
  );
}
