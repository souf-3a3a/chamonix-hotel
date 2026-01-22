import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Reserver from './pages/Reserver.jsx';
import Resto from './pages/Resto.jsx';
import Rooms from './pages/Rooms.jsx';
import './App.css';

function App() {
  return (
    <Router >
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reserver" element={<Reserver />} />
          <Route path="/resto" element={<Resto />} />
          <Route path="/rooms" element={<Rooms />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;