import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import './App.css';
import Authentication from './composants/Authentication';
import Ventes from "./pages/Ventes";
import Extract from "./pages/Extract";
import Connexion from "./pages/Connexion";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Authentication />}>
        <Route index element={<Ventes />} />
        <Route path="blogs" element={<Extract />} />
        <Route path="contact" element={<Connexion />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;


