import React, { useState, useEffect } from 'react';
import './Scrolling.css';
import 'animate.css';
import Button from '../Button/Button';

const texts = [
  'Java Course Starts on 16-09-2024',
  'Python Course Starts on 23-09-2024',
  'JavaScript Course Starts on 30-09-2024',
  // Add more texts here...
];

export default function Scrolling() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState(texts[0]);
  const [animationClass, setAnimationClass] = useState('animate__animated animate__backInLeft');

  useEffect(() => {
    const timer = setInterval(() => {
      const newIndex = (currentIndex + 1) % texts.length;
      setCurrentIndex(newIndex);
      setCurrentText(texts[newIndex]);
    }, 3000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  useEffect(() => {
    setAnimationClass('');
    setTimeout(() => {
      setAnimationClass('animate__animated animate__backInLeft');
    }, 0); 
  }, [currentText]); 

  return (
    <div className="ScrollingParent">
      <div className="ScrollingContainer">
        <div className="leftBox">
          <h2 className={animationClass}>{currentText}</h2>
        </div>
        <div className="rightBox">
          <Button />
        </div>
      </div>
    </div>
  );
}
