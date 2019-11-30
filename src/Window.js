import React, { useState, Fragment, useCallback } from 'react';

function Window() {
  return (
    <div style={{
        "width": "100%",
        "height": "100%",
        "backgroundColor": "#e1f7ff",
        "color": "black",
        "position": "relative",
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
