import React from 'react';
import './App.css';
import SamButton from './SamButton.js';

function App() {
  return (
    <div className="App">
      <SamButton kind="sensible" />
      <SamButton kind="jittery" />
      <SamButton kind="smooth" />
      <SamButton kind="springy" />
    </div>
  );
}

export default App;
