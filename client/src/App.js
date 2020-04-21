import React from 'react';
import AllPlayers from './components/players';
import Titles from './components/title';

import './styles.css';


function App() {
  return (
    <div className="App">
      <Titles />
      <AllPlayers />
    </div>
  );
}

export default App;
