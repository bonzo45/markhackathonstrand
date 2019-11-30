import React, { useState, Fragment, useCallback } from 'react';

function Window({number}) {
    let colour;
    let shadowColour;
    if (number % 3 === 1) {
        colour = "rgb(225, 247, 255)";
        shadowColour = "rgba(225, 247, 255, 0.5)";
    } else if (number % 3 === 2) {
        colour = "rgba(182, 236, 255)";
        shadowColour = "rgba(182, 236, 255, 0.5)";
    } else if (number % 3 === 0) {
        colour = "rgb(141, 224, 253)";
        shadowColour = "rgba(141, 224, 253, 0.5)";
    }

  return (
    <div style={{
        "width": "100%",
        "height": "100%",
        "backgroundColor": colour,
        "color": "black",
        "position": "relative",
        "boxShadow": `0px 0px 50px 10px ${shadowColour}`,
        "cursor": "pointer",
    }}>
    </div>
  );
}

export default Window;
