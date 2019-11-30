import React, { useState, Fragment, useCallback } from 'react';

function Window() {
  return (
    <div style={{
        "width": "100%",
        "height": "100%",
        "backgroundColor": "rgb(225, 247, 255)",
        "color": "black",
        "position": "relative",
        "box-shadow": "0px 0px 20px 0 rgba(225, 247, 255, 0.5)",
    }}>
        <div style={{
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
    </div>
  );
}

export default Window;
