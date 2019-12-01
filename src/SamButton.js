import React  from 'react';
import anime from 'animejs';
import './SamButton.css';

function SamButton({kind}) {
  const duration = 150;
  const animation = 'easeOutExpo';

  const handleClick = (e) => {
    const tl = anime.timeline();
    if (kind === "sensible") {
      const grow = {
        targets: `.sam-button-${kind}`,
        scale: '1.00',
        duration: duration,
        easing: animation,
      };
      tl.add(grow, 0)
    }
  }

  const handleMouseDown = (e) => {
    const tl = anime.timeline();
    if (kind === "sensible") {
      const shrink = {
        targets: `.sam-button-${kind}`,
        scale: '0.95',
        duration: duration,
        easing: animation,
      };
      tl.add(shrink, 0)
    }
  }

  return (
    <div
        className={`sam-button sam-button-${kind}`}
        style={{}}
        onClick={handleClick}
        onMouseDown={handleMouseDown}
    >
        <span className="sam-button-text">{kind}</span>
    </div>
  );
}

export default SamButton;
