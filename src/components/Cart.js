import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItems } from "./utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold m-4 p-4">Cart</h1>
      {cartItems.length > 1 && (
        <button
          className="bg-black text-white p-2 rounded-lg"
          onClick={() => {
            dispatch(clearItems());
          }}
        >
          Clear
        </button>
      )}
      <div className="w-6/12 m-auto">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
