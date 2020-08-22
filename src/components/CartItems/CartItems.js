import React from "react";
import "./CartItems.css";
const CartItems = (props) => {
  const { price, quantity, img } = props.items;
  return (
    <div>
      <div className="cart-item-images">
        <img src={img} className="img-fluid" alt="" />
      </div>
      <div>
        <p>
          <strong>
            Price: {price} || Qty: {quantity}
          </strong>
        </p>
      </div>
    </div>
  );
};

export default CartItems;
