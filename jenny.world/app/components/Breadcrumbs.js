import React from 'react';
import Link from "next/link";
import './component-styles/Breadcrumbs.css';

export default function Tooltip({ children }) {
  return (
    <h2 className="breadcrumbsh2">
      <span className="breadcrumbs">
        {children}
      </span>
    </h2>
  );
}