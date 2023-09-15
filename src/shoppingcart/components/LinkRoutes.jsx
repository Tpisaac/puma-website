import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Shop from "../pages/shop/Shop";
import Cart from "../pages/cart/Cart";

function LinkRoutes() {
  const location = useLocation();
  return (
    <div>
      <Routes location={location} key={location.pathname}>
        <Route index element={<Shop />} />
        <Route path="/shopping-cart" element={<Shop />} />
        <Route path="/shopping-cart/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default LinkRoutes;
