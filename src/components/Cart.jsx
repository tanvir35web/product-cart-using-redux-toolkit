import React from "react";
import { useSelector } from "react-redux";
import { getItemSelector } from "../redux/slices/cartSlice";


const Cart = () => {

    const items = useSelector(getItemSelector);
    const totalPrice = items.reduce((a, b) => a + b.price, 0)
  return (
    <div className="alert alert-success">
      <h3 className="text-center">Total Item {items.length} (Rs {totalPrice})/-</h3>
    </div>
  );
};

export default Cart;
