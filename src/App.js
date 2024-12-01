import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css';
import Signup from './Pages/Signup'
import Login from './Pages/Login'


/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;