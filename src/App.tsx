import React from 'react';
// import logo from './logo.svg';
import temporary from './images/work-in-progress.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello Wefox!
        </p>
        <img src={temporary} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
