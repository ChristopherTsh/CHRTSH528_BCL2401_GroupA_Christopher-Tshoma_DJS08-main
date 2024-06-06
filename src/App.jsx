import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./page/About";
import Home from "./page/Home";
import Vans from "./page/Vans";
import VanDetail from "./page/VanDetail"
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}