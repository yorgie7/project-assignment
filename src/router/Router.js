import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import Homepage from '../pages/Homepage';
import ProductDetails from '../pages/ProductDetails';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/homepage" />} />

        <Route path="/homepage" element={<Homepage />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
