import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'

import Home from './pages/Home.js';
import Login from './pages/Login';
import Profile from './pages/Profile.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/profile" element={<Profile/>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
