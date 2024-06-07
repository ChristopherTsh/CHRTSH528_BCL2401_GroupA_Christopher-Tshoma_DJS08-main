import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./page/About";
import Home from "./page/Home";
import Vans from "./page/Vans";
import VanDetail from "./page/VanDetail";
import Dashboard from "./Host/dashboard";
import Income from "./Host/Income";
import Reviews from "./Host/Reviews";
import HostVans from "./Host/HostVans";
import HostVansDetails from "./Host/HostVansDetails";
import HostVanInfo from "./Host/HostVanInfo";
import HostVanPhotos from "./Host/HostVanPhotos";
import HostVanPricing from "./Host/HostVanPricing";
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";

import './server'

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} >
            <Route path="/vans/:id" element={<VanDetail />} />
          </Route>

          <Route path="host" element={<HostLayout />} >
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVansDetails />}>
            <Route index element={<HostVanInfo />} />
            <Route path="pricing" element={<HostVanPricing  />} />
            <Route path="photos" element={<HostVanPhotos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}