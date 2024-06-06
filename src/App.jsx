import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./page/About";
import Home from "./page/Home";
import Vans from "./page/Vans";
import VanDetail from "./page/VanDetail";
import Dashboard from "./Host/dashboard";
import Income from "./Host/Income";
import Reviews from "./Host/Reviews";
import Layout from "./components/Layout";

import './server'

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
          <Route path="/host" element={<Dashboard />} />
          <Route path="/host/income" element={<Income />} />
          <Route path="/host/reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}