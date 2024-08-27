import React from 'react'
import Number from '../Assests/Number.png'
import './Interviewpage.css'

export default function InterviewPage() {
  return (
    <div>
      <div className="container">
        <div className="section_1">
            <div className="sec_1_container">
                <h3>How Our Mock Interviews Work</h3>
                <div className="step1">
                  <img src={Number} alt="" />
                  <h5>Register</h5>  
                  <p>Fill the data fileds</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
