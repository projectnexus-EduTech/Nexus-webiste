import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/ui/Homepage.jsx';
import InterviewRegistration from './components/ui/InterviewRegistration.jsx';
import { div } from 'framer-motion/client';
import Login from '../src/components/ui/Login/Login.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register-interview" element={<InterviewRegistration />} />
        
      </Routes>
    </Router>
    // <div>
    //   <Login/>
    // </div>
    
  );
}

export default App;