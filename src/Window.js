import React, { useState, Fragment, useCallback } from 'react';

function Window({number}) {
    let colour;
    let shadowColour;
    if (number === 1) {
        colour = "rgb(225, 247, 255)";
        shadowColour = "rgba(225, 247, 255, 0.5)";
    } else if (number === 2) {
        colour = "rgba(182, 236, 255)";
        shadowColour = "rgba(182, 236, 255, 0.5)";
    } else if (number === 3) {
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
        "box-shadow": `0px 0px 20px 0 ${shadowColour}`,
    }}>
{/*        <div style={{
            "position": "absolute",
            "top": "10%",
            "left": "10%",
            "width": "80%",
            "height": "40%",
            "backgroundColor": "#2ac6ff",
        }} />
        <div style={{
            "position": "absolute",
            "top": "50%",
            "left": "10%",
            "width": "80%",
            "height": "40%",
            "backgroundColor": "#1f404c",
        }} />
*/}    </div>
  );
}

export default Window;
