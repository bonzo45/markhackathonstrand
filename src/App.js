import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import anime from 'animejs';
import Thing from './Thing';

function App() {
  useEffect(() => {
    anime({
      targets: '.App-logo',
      rotate: '1turn',
      duration: 800
    });
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Things">
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
          <Thing />
        </div>
      </header>
    </div>
  );
}

export default App;
