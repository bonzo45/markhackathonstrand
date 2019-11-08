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
        <div className="Things">
          <Thing thingID="1"/>
          <Thing thingID="2"/>
          <Thing thingID="3"/>
          <Thing thingID="4"/>
          <Thing thingID="5"/>
          <Thing thingID="6"/>
        </div>
      </header>
    </div>
  );
}

export default App;
