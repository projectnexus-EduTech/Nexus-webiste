import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/ui/Homepage.jsx';
import InterviewRegistration from './components/ui/InterviewRegistration.jsx';
import { div } from 'framer-motion/client';
import AboutUs from '../src/components/ui/AboutUs.jsx'
import LiveClass from './components/LiveClass/LiveClass.jsx';
import Login from './components/Login/Login.jsx'
import Register from './components/Registration/Register.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Reset from './components/Reset/Reset.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register-interview" element={<InterviewRegistration />} />
        <Route path="/About us" element={<AboutUs/>}/>
        <Route path="/Live Courses" element={<LiveClass/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/reset" element={<Reset/>}/>

      </Routes>
    </Router>
    // <div>
    //  <LiveClass/>
    // </div>
    
  );
}

export default App;