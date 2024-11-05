import React from 'react';
import Link from "next/link";
import './component-styles/Button.css';

export default function Button({ title, image, imageHeight, desc, width, link, isExternal, target, type }) {

  const buttonClass = `button ${type ? `button-${type}` : ""} ${!desc ? "button" : ""}`.trim();
  
  const ButtonContent = (
    <button className={buttonClass} style={{ width }}>
      <div className="title">
        {image && <img src={image} alt="Button Icon" className="button-image" />}
        {title}
      </div>
      <span className="desc">{desc}</span>
      {isExternal ? (
        <span className="external-icon">↗</span>
      ) : (
        <i className="arrow right"></i>
      )}
    </button>
  );

  if (isExternal) {
    return (
      <a href={link} target={target} rel="noopener noreferrer">
        {ButtonContent}
      </a>
    );
  } else {
    return (
      <Link href={link} passHref>
          {ButtonContent}
      </Link>
    );
  }
}