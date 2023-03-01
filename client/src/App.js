import {useState} from 'react'
import './App.css';

import Login from './components/Login/LoginForm.js';
import Home from './components/Home.js';
import {BrowserRouter as Router, Routes, Route,Link} from "react-router-dom"

function App() {

  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/login" element={<Login/>} />
    </Routes>
    </Router>
  );
}

export default App;
