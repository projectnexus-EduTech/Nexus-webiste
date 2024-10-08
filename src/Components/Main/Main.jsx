import React from 'react';
import HowWork from '../HowWork/HowWork';
import circle_1 from '../Assests/circle-1.png';
import circle_2 from '../Assests/circle-2.png';
import circle_3 from '../Assests/number-3.png';
import Why from '../Why/Why';
import CourseCards from '../CourseCards/CourseCards';
import CourseCard from '../CourseCard/CourseCard';
import Scrolling from '../Scrolling/Scrolling';
import CourseOutComes from '../CourseOurComes/CourseOurComes';
import './Main.css'; 

const steps = [
  { image: circle_1, label: 'Registration' },
  { image: circle_2, label: 'Mock Interview With Experts' },
  { image: circle_3, label: 'Spot Feedback' },
];

export default function Main() {
  return (
    <div className="main-container">
         <HowWork title="How Our Mock Interviews Work" steps={steps} />
         <Why/>
         <CourseCards/>
         <Scrolling/>
         <CourseCard/>
         <CourseOutComes/>
    </div>
  );
}
