import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import React from 'react';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
