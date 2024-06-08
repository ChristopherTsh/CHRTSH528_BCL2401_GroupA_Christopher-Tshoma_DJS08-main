import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import NotFound from "./page/NotFound";
import Login, { action as loginAction } from "./page/Login";
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";
import Error from "./components/Error";
import AuthRequired from "./components/AuthRequired";

import "./server";

const router = createBrowserRouter(createRoutesFromElements(
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" 
          element={<Login />} 
          action={loginAction} 
          />
          <Route
            path="vans"
            element={<Vans />}
            errorElement={<Error />}
            loader={vansLoader}
          >
            <Route
              path="vans:id"
              element={<VanDetail />}
              errorElement={<Error />}
              loader={vanDetailLoader}
            />
            <Route element={<AuthRequired />}>
            <Route path="host" element={<HostLayout />} >
            <Route
            index
            element={<Dashboard />}
            errorElement={<Error />}
           loader={dashboardLoader}
           />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans"
             element={<HostVans />}
             errorElement={<Error />}
             loader={hostVansLoader}
             />
              <Route
          path="vans/:id"
          element={<HostVanDetails />}
          errorElement={<Error />}
          loader={hostVansDetailLoader}
            >
              <Route index element={<HostVanInfo />} />
              <Route index element={<HostVans />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
        </Route>
   
  ))
      

  function App() {
    return (
    <RouterProvider router={router} />
  )
}
