import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./Product";

import Navbar from "../../components/Navbar";
import Footer from "../../../sections/Footer";
import { Services, Subscribe } from "../../../sections";
// import Navbar from "../../../components/Navbar";

function Shop() {
  return (
    <div>
      <Navbar />
      <div className="py-12 flex flex-col justify-center items-center">
        <div className="shop">
          <div className="text-center mt-12 font-palanquin font-bold text-3xl p-12">
            <h1>HEATWAVE</h1>
            <p className="font-normal">LAST CHANCE SUMMER PICKS</p>
          </div>
          <div className="">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center">
              {PRODUCTS.map((product) => (
                <Product data={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="padding-x bg-black padding-t pb-8">
        <Footer />
      </section>
    </div>
  );
}

export default Shop;
