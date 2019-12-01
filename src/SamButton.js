import React  from 'react';
import anime from 'animejs';
import './SamButton.css';

const randomPositiveOrNegative = () => Math.floor(Math.random() * 2) - 1;

const jitterFrames = (duration, jitters, jitterAmplitude) => {
  const jitterDuration = duration / jitters;
  const result = [];
  for (let i = 0; i < jitters - 1; i++) {
    result.push({
      value: randomPositiveOrNegative() * jitterAmplitude,
      duration: jitterDuration,
    })
  }
  result.push({
    value: 0,
    duration: jitterDuration,
  })
  return result;
}

function SamButton({kind}) {
  const duration = 150;
  const animation = 'easeOutExpo';

  const handleMouseDown = (e) => {
    const tl = anime.timeline();
    const shrink = {
      targets: `.sam-button-${kind}`,
      scale: '0.95',
      duration: duration,
      easing: animation,
    };
    tl.add(shrink, 0)
  }

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
    } else if (kind === "jittery") {
      const jitterDuration = 300;
      const jitters = 10;
      const jitterAmplitude = 15;
      const jitter = {
        targets: `.sam-button-${kind}`,
        translateX: jitterFrames(jitterDuration, jitters, jitterAmplitude),
        translateY: jitterFrames(jitterDuration, jitters, 5),
        scale: [
          { value: '1.00', duration: jitterDuration, easing: animation},
        ],
        easing: 'easeInOutElastic(1, 0.5)',
      };
      tl.add(jitter, 0)
    } else if (kind === "smooth") {
      const smoothDuration = 300;
      const smooth = {
        targets: `.sam-button-${kind}`,
        scale: '1.00',
        duration: smoothDuration,
        easing: 'easeInOutSine',
      };
      tl.add(smooth, 0)
    } else if (kind === "springy") {
      const springDuration = 150;
      const spring = {
        targets: `.sam-button-${kind}`,
        scale: '1.00',
        duration: springDuration,
        easing: 'spring(2, 80, 10, 50)',
      };
      tl.add(spring, 0)
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
