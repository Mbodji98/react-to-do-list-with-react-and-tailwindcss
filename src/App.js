import React from 'react';
import { Auth, Todos } from './dashboard/pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path='/todos' element={<Todos />} />
      </Routes>
    </BrowserRouter>
  )
}
