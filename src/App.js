import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home/Home'
import About from './Pages/About'
import Auth from './Pages/Auth/Auth'
import Question from './Pages/Questions/Question';
import AskQuestion from './Pages/AskQuestion/AskQuestion';
import DisplayQuestion from './Pages/Questions/DisplayQuestion';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/questions" element={<Question />} />
        <Route path="/askquestion" element={<AskQuestion />} />
        <Route path="/questions/:id" element={<DisplayQuestion />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
