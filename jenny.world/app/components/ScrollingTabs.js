'use client'

import { useEffect, useRef, useState } from 'react';
import './component-styles/ScrollingTabs.css';

const ScrollingTabs = ({ children }) => {
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(null);
  const scrollingTabsRef = useRef(null);

  useEffect(() => {
    const handleMouseDown = (e) => {
      setIsDown(true);
      setStartX(e.pageX - scrollingTabsRef.current.offsetLeft);
      setScrollLeft(scrollingTabsRef.current.scrollLeft);
    };
  
    const handleMouseLeave = () => {
      setIsDown(false);
    };
  
    const handleMouseUp = () => {
      setIsDown(false);
    };
  
    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - scrollingTabsRef.current.offsetLeft;
      const walk = (x - startX) * 2; // Adjust the scrolling speed if needed
      scrollingTabsRef.current.scrollLeft = scrollLeft - walk;
    };
  
    const currentRef = scrollingTabsRef.current;
  
    if (currentRef) {
      currentRef.addEventListener('mousedown', handleMouseDown);
      currentRef.addEventListener('mouseleave', handleMouseLeave);
      currentRef.addEventListener('mouseup', handleMouseUp);
      currentRef.addEventListener('mousemove', handleMouseMove);
    }
  
    return () => {
      if (currentRef) {
        currentRef.removeEventListener('mousedown', handleMouseDown);
        currentRef.removeEventListener('mouseleave', handleMouseLeave);
        currentRef.removeEventListener('mouseup', handleMouseUp);
        currentRef.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [isDown, startX, scrollLeft]);  

  return (
    <div ref={scrollingTabsRef} className="scrollingTabs">
      {children}
    </div>
  );
};

export default ScrollingTabs;