import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NotFound from './routes/404/NotFound.route';
import Confrences from './routes/confrences/Confrences.route';
import Home from './routes/home/Home.route';
import Register from './routes/register/Register.route';
import Speakers from './routes/speakers/Speakers.route';
import Venues from './routes/venues/Venues.route';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/speakers' element={<Speakers />} />
      <Route path='/venues' element={<Venues />} />
      <Route path='/confrences' element={<Confrences />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
