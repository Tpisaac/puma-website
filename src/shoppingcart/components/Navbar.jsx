import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

import puma from "../../assets/images/pumaa.png";

function Navbar() {
  return (
    <div className="w-full h-21 flex justify-between md:px-8 fixed bg-white z-10">
      <div className="ml-8 mx-4 py-8">
        <Link to="/puma-website">
          <img src={puma} alt="logo" width={80} height={20} />
        </Link>
      </div>
      <div className="text-black inline-flex p-12">
        {/* <Link to="/puma-website/shop"> Shop </Link> */}
        {/* <p>Go to cart</p> */}
        <Link to="/puma-website/cart">
          <ShoppingCart size={32} className="mt-2" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
