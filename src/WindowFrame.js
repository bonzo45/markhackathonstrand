import React, { useState } from 'react';
import anime from 'animejs';
import Window from './Window.js';

function WindowFrame({number, left, top, width, height, screenWidth, screenHeight}) {
  const cheekyDuration = 100;
  const notsocheekyDuration = 600;
  const duration = 300;
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    if (open) {
      const tl = anime.timeline();
      const first = {
        targets: `.window-frame-${number}`,
        scale: '0.95',
        left: `${left}px`,
        top: `${top}px`,
        width: `${width}px`,
        height: `${height}px`,
        duration: duration,
        easing: 'easeInOutQuad',
        zIndex: '0',
      };
      const second = {
        targets: `.window-frame-${number}`,
        scale: '1.00',
        duration: notsocheekyDuration,
      }
      tl.add(first, 0)
      tl.add(second, duration)
    } else {
      const tl = anime.timeline();
      const first = {
        targets: `.window-frame-${number}`,
        zIndex: '1',
        duration: 0,
      };
      const second = {
        targets: `.window-frame-${number}`,
        scale: '0.95',
        duration: cheekyDuration,
        easing: 'easeInOutSine',
      };
      const third = {
        targets: `.window-frame-${number}`,
        scale: '1.00',
        top: '0px',
        left: '0px',
        width: `${screenWidth}px`,
        height: `${screenHeight}px`,
        duration: duration,
        easing: 'easeInOutSine',
      };
      tl.add(first, 0)
      tl.add(second, 0)
      tl.add(third, cheekyDuration)
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
