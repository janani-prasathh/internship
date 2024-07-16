import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import UserDetailsPage from './components/UserDetailsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/user-details" element={<UserDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
