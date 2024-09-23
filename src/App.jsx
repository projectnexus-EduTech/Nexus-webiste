import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/ui/Homepage.jsx';
import InterviewRegistration from './components/ui/InterviewRegistration.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register-interview" element={<InterviewRegistration />} />
      </Routes>
    </Router>
  );
}

export default App;