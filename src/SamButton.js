import React  from 'react';
import anime from 'animejs';
import './SamButton.css';

function SamButton() {
  const duration = 200;
  const animation = 'easeOutExpo';

  const handleClick = (e) => {
      const tl = anime.timeline();
      const grow = {
        targets: `.sam-button`,
        scale: '1.00',
        duration: duration,
        easing: animation,
      };
      tl.add(grow, 0)
  }

  const handleMouseDown = (e) => {
      const tl = anime.timeline();
      const shrink = {
        targets: `.sam-button`,
        scale: '0.95',
        duration: duration,
        easing: animation,
      };
      tl.add(shrink, 0)
  }

  return (
    <div
        className="sam-button"
        style={{}}
        onClick={handleClick}
        onMouseDown={handleMouseDown}
    >
        <span className="sam-button-text">Sensible</span>
    </div>
  );
}

export default SamButton;
