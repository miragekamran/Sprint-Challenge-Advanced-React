import React from "react";
import Button from "@material-ui/core/Button";
import {useDarkMode} from '../hooks/useDarkMode';

export default function Title() {
  const toggleMode = event => {
    event.preventDefault();
    setDarkMode(!darkMode);
  };

  const [darkMode, setDarkMode] = useDarkMode(toggleMode);

  return (
    <div className="navi">
      <Button
        variant="contained"
        className="toggle-dark"
        data-testid="darkmode"
        onClick={toggleMode}
      >
        Dark Mode
      </Button>
      <h2 className='title-header'>Women Soccer Players' List</h2>
    </div>
  );
}
