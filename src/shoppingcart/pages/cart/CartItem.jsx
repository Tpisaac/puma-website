import React, { useContext } from "react";

import { ShopContext } from "../../context/Shop-Context";

const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem w-[270px] h-[200px] flex md: gap-2 items-center shadow-xl rounded m-8">
      <div className="ml-5">
        <img src={productImage} width={170} />
      </div>
      <div className="text-center w-[100%]">
        <p>{productName}</p>
        <b>
          <p className="text-xl"> £ {price}</p>
        </b>
        <div className="gap-2">
          <button
            className="w-6 h-8 text-black border  hover:bg-red-400 rounded"
            onClick={() => removeFromCart(id)}
          >
            -
          </button>
          <input
            className="w-10 text-center font-bold border"
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button
            className="w-6 h-8 text-black border  hover:bg-blue-500 rounded"
            onClick={() => addToCart(id)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
