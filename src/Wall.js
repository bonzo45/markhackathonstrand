import React, { useState, Fragment, useCallback } from 'react';
import './Wall.css';
import anime from 'animejs';
import Window from './Window.js';

function Wall() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const measuredRef = useCallback(node => {
    if (node !== null) {
      console.log(node);
      setWidth(node.clientWidth);
      setHeight(node.clientHeight);
    }
  }, []);

  console.log("Width");
  console.log(width);
  console.log("Height");
  console.log(height);

  const windowTop = 50;
  const windowSpacing = 50;
  const windowWidth = 200;
  const windowHeight = height - 2 * windowSpacing;
  const paddingLeft = (width - windowWidth * 3 - windowSpacing * 2) / 2;
  const window1Left = paddingLeft;
  const window2Left = window1Left + windowWidth + windowSpacing;
  const window3Left = window2Left + windowWidth + windowSpacing;

  return (
    <div
      style={{
        "width": "100%",
        "height": "100%",
        "position": "relative",
      }}
      ref={measuredRef}
    >
      <div className="window-frame" style={{
        "left": `${window1Left}px`,
        "top": `${windowTop}px`,
        "width": `${windowWidth}px`,
        "height": `${windowHeight}px`,
      }}>
        <Window />
      </div>
      <div className="window-frame" style={{
        "left": `${window2Left}px`,
        "top": `${windowTop}px`,
        "width": `${windowWidth}px`,
        "height": `${windowHeight}px`,
      }}>
        <Window />
      </div>
      <div className="window-frame" style={{
        "left": `${window3Left}px`,
        "top": `${windowTop}px`,
        "width": `${windowWidth}px`,
        "height": `${windowHeight}px`,
      }}>
        <Window />
      </div>
    </div>
  );
}

export default Wall;
