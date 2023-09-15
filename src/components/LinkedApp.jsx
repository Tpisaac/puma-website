import React, { lazy, Suspense } from "react";
// import App from "../App";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  //   useLocation,
} from "react-router-dom";
// import { ShopContextProvider } from "../shoppingcart/context/Shop-Context";
// import Shop from "../shoppingcart/pages/shop/Shop";
// import Cart from "../shoppingcart/pages/cart/Cart";

const App = lazy(() => import("../App"));
const Shop = lazy(() => import("../shoppingcart/pages/shop/Shop"));
const Cart = lazy(() => import("../shoppingcart/pages/cart/Cart"));
const ShopContextProvider = lazy(() =>
  import("../shoppingcart/context/Shop-Context").then((module) => {
    return { default: module.ShopContextProvider };
  })
);

const LinkedApp = () => {
  //   const location = useLocation();

  return (
    <div>
      <Suspense fallback={<h1>Loading...</h1>}>
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
      </Suspense>
    </div>
  );
};

export default LinkedApp;
