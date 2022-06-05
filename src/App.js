import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'

import Home from './pages/Home.js';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element={<Login/>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
