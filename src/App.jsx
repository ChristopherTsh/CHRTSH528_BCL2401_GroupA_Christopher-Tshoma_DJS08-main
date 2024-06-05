import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./page/About";
import Home from "./page/Home";
import Vans from "./vans";
import './server'

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">
          #VANLive
        </Link>
        <nav>
          <Link to="/About">About</Link>
          <Link to="/Vans">Vans</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
    </BrowserRouter>
  );
}