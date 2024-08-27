import React from 'react';
import HowWork from '../HowWork/HowWork';
import circle_1 from '../Assests/circle-1.png';
import circle_2 from '../Assests/circle-2.png';
import circle_3 from '../Assests/number-3.png';

const steps = [
  { image: circle_1, label: 'Registration' },
  { image: circle_2, label: 'Mock Interview With Experts' },
  { image: circle_3, label: 'Spot Feedback' },
];

export default function Main() {
  return (
    <div>
         <HowWork 
      title="How Our Mock Interviews Work" 
      steps={steps} 
    />
    </div>
  )
}
