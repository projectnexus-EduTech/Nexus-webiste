import "./HowWork.css";
import React from 'react';

export default function HowWork({ title, steps }) {
  return (
    <div className="Howwork">
      <div className="HowWork_Container">
        <h1>{title}</h1>
        <div className="steps">
          {steps.map((step, index) => (
            <div className="step" key={index}>
              <img src={step.image} alt={step.label} />
              <p>{step.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
