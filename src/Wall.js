import React, { useState, Fragment, useCallback } from 'react';
import './Wall.css';
import anime from 'animejs';
import Window from './Window.js';

function Wall() {
  return (
    <div>
      <div className="window-frame">
        <Window />
      </div>
      <div className="window-frame">
        <Window />
      </div>
      <div className="window-frame">
        <Window />
      </div>
    </div>
  );
}

export default Wall;
