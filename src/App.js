// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Page/home-page/Home';
import ShowDetail from './Page/detail-page/ShowDetail';
import './App.css';

function App() {
  return (
    <div className='app'>
    <Router>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/show/:id" element={<ShowDetail />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
