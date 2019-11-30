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
            "top": "0px",
            "width": "100%",
            "height": "50%",
            "backgroundColor": "red",
        }} />
        <div style={{
            "position": "absolute",
            "top": "50%",
            "width": "100%",
            "height": "50%",
            "backgroundColor": "blue",
        }} />
    </div>
  );
}

export default Window;
