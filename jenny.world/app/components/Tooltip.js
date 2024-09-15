import React from 'react';
import './component-styles/Tooltip.css';

export default function Tooltip({ text, width, marginleft, border, children }) {
  return (
    <span className="tooltip-container" style={{ border: border }}>
      {children}
      <span className="tooltip-text" style={{ width, marginLeft: marginleft, }}>{text}</span>
    </span>
  );
}