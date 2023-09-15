import React from "react";
import App from "../App";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  //   useLocation,
} from "react-router-dom";
import { ShopContextProvider } from "../shoppingcart/context/Shop-Context";
import Shop from "../shoppingcart/pages/shop/Shop";
import Cart from "../shoppingcart/pages/cart/Cart";

const LinkedApp = () => {
  //   const location = useLocation();

  return (
    <div>
      <ShopContextProvider>
        <Router>
          <Routes>
            <Route index element={<App />} />
            <Route path="/puma-website" element={<App />} />
            <Route path="/puma-website/shop" element={<Shop />} />
            <Route path="/puma-website/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
};

export default LinkedApp;
