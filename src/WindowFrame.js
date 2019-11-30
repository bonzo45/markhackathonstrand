import React, { useState, Fragment, useCallback } from 'react';
import anime from 'animejs';
import Window from './Window.js';

function WindowFrame({number, left, top, width, height, screenWidth, screenHeight}) {
  const duration = 300;
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    if (open) {
      anime({
        targets: `.window-frame-${number}`,
        left: `${left}px`,
        top: `${top}px`,
        width: `${width}px`,
        height: `${height}px`,
        duration: duration,
        easing: 'easeInOutQuad',
        zIndex: '0',
      });
    } else {
      const tl = anime.timeline();
      const first = {
        targets: `.window-frame-${number}`,
        zIndex: '1',
        duration: 0,
      };
      const second = {
        targets: `.window-frame-${number}`,
        top: '0px',
        left: '0px',
        width: `${screenWidth}px`,
        height: `${screenHeight}px`,
        duration: duration,
        easing: 'easeInOutSine',
      };
      tl.add(first, 0)
      tl.add(second, 0)
    }
    setOpen(!open);
  }

  return (
      <div
        className={`window-frame window-frame-${number}`} style={{
          "left": `${left}px`,
          "top": `${top}px`,
          "width": `${width}px`,
          "height": `${height}px`,
        }}
        onClick={handleClick}
      >
        <Window
            number={number}
        />
      </div>
  );
}

export default WindowFrame;
