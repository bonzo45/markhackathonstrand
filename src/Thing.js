import React, { useState, Fragment, useCallback } from 'react';
import './Thing.css';
import anime from 'animejs';

function Thing({thingID}) {

  const [selected, setSelected] = useState(false);
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);

  const handleClick = (e) => {
    console.log(`thing-${thingID}`);
    var tl;
    if (selected) {
      tl = anime.timeline();
      const first = {
        targets: `#thing-to-inflate-${thingID}`,
        left: `${left}px`,
        top: `${top}px`,
        width: '300px',
        height: '200px',
        duration: 500,
        easing: 'easeInOutQuad'
      };
      const second = {
        targets: `#thing-to-inflate-${thingID}`,
        left: '0px',
        top: '0px',
        width: '0px',
        height: '0px',
        duration: 0,
        easing: 'easeInOutQuad'
      };
      console.log("first: ", first);
      console.log("second: ", second);
      tl.add(first, 0)
      // tl.add(second, '+=500')
    } else {
      tl = anime.timeline();
      const first = {
        targets: `#thing-to-inflate-${thingID}`,
        left: `${left}px`,
        top: `${top}px`,
        width: '300px',
        height: '200px',
        duration: 0,
        easing: 'easeInOutQuad'
      };
      const second = {
        targets: `#thing-to-inflate-${thingID}`,
        left: '0px',
        top: '0px',
        width: '600px',
        height: '600px',
        duration: 500,
        easing: 'easeInOutQuad'
      };
      console.log("first: ", first);
      console.log("second: ", second);
      tl.add(first, 0)
      tl.add(second, 0)
    }
    setTimeout(() => setSelected(!selected), 500);
  }

  const measuredRef = useCallback(node => {
    if (node !== null) {
      setLeft(node.offsetLeft);
      setTop(node.offsetTop);
    }
  }, [left, top]);

  return (
    <Fragment>
      <div id={`thing-${thingID}`} className="Thing" onClick={handleClick}
        ref={measuredRef}
      >
        {`${thingID}`}
      </div>
      <div
        id={`thing-to-inflate-${thingID}`}
        className="ThingToInflate"
        onClick={handleClick}
      >
        {`${thingID}`}
      </div>
    </Fragment>
  );
}

export default Thing;
