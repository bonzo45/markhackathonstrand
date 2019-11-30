import React, { useState, Fragment, useCallback } from 'react';
import './Wall.css';
import anime from 'animejs';
import Window from './Window.js';
import WindowFrame from './WindowFrame.js';

function Wall() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const measuredRef = useCallback(node => {
    if (node !== null) {
      setWidth(node.clientWidth);
      setHeight(node.clientHeight);
    }
  }, []);

  const windowSpacing = 50;
  const windowTop = windowSpacing;
  const windowWidth = 250;
  const windowHeight = (height - 3 * windowSpacing) / 2;
  const windowsBelowTop = windowSpacing + windowHeight + windowSpacing;
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
      <WindowFrame
        number={1}
        left={window1Left}
        top={windowTop}
        width={windowWidth}
        height={windowHeight}
        screenWidth={width}
        screenHeight={height}
      />
      <WindowFrame
        number={2}
        left={window2Left}
        top={windowTop}
        width={windowWidth}
        height={windowHeight}
        screenWidth={width}
        screenHeight={height}
      />
      <WindowFrame
        number={3}
        left={window3Left}
        top={windowTop}
        width={windowWidth}
        height={windowHeight}
        screenWidth={width}
        screenHeight={height}
      />
      <WindowFrame
        number={4}
        left={window1Left}
        top={windowsBelowTop}
        width={windowWidth}
        height={windowHeight}
        screenWidth={width}
        screenHeight={height}
      />
      <WindowFrame
        number={5}
        left={window2Left}
        top={windowsBelowTop}
        width={windowWidth}
        height={windowHeight}
        screenWidth={width}
        screenHeight={height}
      />
      <WindowFrame
        number={6}
        left={window3Left}
        top={windowsBelowTop}
        width={windowWidth}
        height={windowHeight}
        screenWidth={width}
        screenHeight={height}
      />
    </div>
  );
}

export default Wall;
