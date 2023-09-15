import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/Shop-Context";
import CartItem from "./CartItem";

import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { Footer, Subscribe } from "../../../sections";
import { ShoppingCart } from "phosphor-react";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="w-full h-auto">
      <div className="">
        <Navbar />
      </div>
      <div className="flex flex-col justify-center py-12 items-center">
        <div className="text-center text-3xl mt-16 ">
          <h1 className="mt-10">My Shopping Cart</h1>
        </div>
        <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} />;
            }
          })}
        </div>
        {totalAmount > 0 ? (
          <div className="w-full lg:w-[50%] md:w-[50%] flex justify-between p-10">
            <div>
              {/* <p className="font-bold text-center ">
                Subtotal: £ {totalAmount}
              </p> */}

              <button
                className="text-white bg-purple-500 hover:bg-red-400 px-4 py-2 border border-red-400 rounded-full"
                onClick={() => navigate("/puma-website/shop")}
              >
                Continue Shopping
              </button>
            </div>
            <div className=" inline-flex">
              <p className="font-bold font-montserrat text-center mt-2 mx-3">
                Subtotal: £ {totalAmount.toLocaleString()}
              </p>
              <button
                className=" justify-end font-montserrat text-white bg-purple-500 hover:bg-red-400 px-4 py-2 border border-red-400 rounded-full"
                onClick={() => navigate("/puma-website")}
              >
                Checkout
              </button>
            </div>
          </div>
        ) : (
          <section className="padding-x h-screen  pb-8  w-full flex justify-center items-center">
            <div className="">
              <ShoppingCart
                size={102}
                className="text-gray-300 top-1/2 left-1/2 absolute transform -translate-x-1/2"
              />
              <h1 className="text-3xl font-normal font-palanquin mt-5">
                Your Shopping Cart is Empty
              </h1>
            </div>
          </section>
        )}
      </div>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="padding-x bg-black padding-t pb-8">
        <Footer />
      </section>
    </div>
  );
};

export default Cart;
