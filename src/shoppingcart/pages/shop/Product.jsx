import React, { useContext } from "react";
import { ShopContext } from "../../context/Shop-Context";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product w-[250px] h-[300px]  gap-2 items-center justify-center shadow-xl rounded m-3  ">
      <div>
        <img src={productImage} width={150} className="m-auto mt-3" />
      </div>
      <div className="text-center m-auto mt-10">
        <div className="text-center m-auto">
          <p>{productName}</p>

          <p className="font-bold mt-1"> £ {price}</p>
        </div>
        <button
          className="text-white font-montserrat bg-purple-500 hover:bg-red-400 px-4 py-2 mt-4 border border-red-400 rounded-full"
          onClick={() => addToCart(id)}
        >
          Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button>
      </div>
    </div>
  );
};
